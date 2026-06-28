---
slug: revit-api-bim-2016
type: article
platform: Personal
date_en: "Jun 2026"
date_zh: "2026年6月"
tags: [BIM, .NET, Revit, Architecture, Plugin Development]
featured: false
title_en: "A C# Developer's Notes on the Revit API: Building a BIM Plugin for Architectural Restoration"
title_zh: "軟體工程師的 Revit API 筆記：為建築修復開發 BIM 插件"
teaser_en: "In 2016 I built a Revit plugin for an NCKU architecture thesis on traditional wood structure restoration. Three years later I wrote it all up. Here's what the Revit extension model looks like from the outside."
teaser_zh: "2016 年為成大建築系學姊的碩論開發 Revit 插件，輔助傳統木構造修復設計。三年後整理成文章。這裡記錄從軟體工程師視角看到的 Revit 插件生態。"
---

In 2016, during the overlap between my undergraduate years at KSU and the start of my master's at NYUST, I got pulled into a BIM project. The client was an architecture student at NCKU writing a thesis on computer-aided restoration of traditional wood-frame buildings. The deliverable was a Revit plugin — named C-Compass — that let restoration architects work inside Revit while triggering image recognition against field photos to locate matching structural components in the BIM model.

I had not touched Revit before. I documented the technical details in a series of articles in 2019. This post is a reconstruction of those notes.

## How Revit extensions work

Revit (Autodesk's BIM authoring tool) exposes a .NET API. Extensions are loaded as DLLs; Revit discovers them through an `.addin` manifest file placed in a specific directory. The manifest points to the DLL and registers the entry class:

```xml
<RevitAddIns>
  <AddIn Type="Command">
    <Assembly>CCompass.dll</Assembly>
    <FullClassName>CCompass.CCompassCommand</FullClassName>
    <AddInId>...</AddInId>
    <Name>CCompass</Name>
  </AddIn>
</RevitAddIns>
```

Each command implements `IExternalCommand` and gets called with `ExternalCommandData`, which gives you access to the active UI document and the underlying document model. The separation matters: `UIDocument` handles what's on screen (selection, views, viewport state), while `Document` is the actual BIM model data.

All modifications to the model must be wrapped in a `Transaction`:

```csharp
Transaction t = new Transaction(document, "Operation Name");
t.Start();
// ... model changes here
t.Commit();
```

This isn't optional — write operations outside a transaction throw exceptions. The pattern also maps well to undo history: each committed transaction becomes one undoable step for the user.

## Building the ribbon UI

Revit plugins surface to users through a custom ribbon panel. The API has five button types; C-Compass used three.

**PushButton** — the simplest: one button, one command.

```csharp
PushButtonData data = new PushButtonData(
    "PushButtonData1", "Run Analysis",
    assemblyPath, "CCompass.RunAnalysisCommand");
data.ToolTip = "Match field photo to BIM element";
panel.AddItem(data);
```

**SplitButton** — a dropdown that groups related commands. Useful when you have a main action and a few variants you want accessible without cluttering the ribbon.

**RadioButtonGroup** — mutual exclusion between modes. C-Compass used this to toggle between match-by-outline and match-by-texture analysis modes. Each `ToggleButtonData` in the group is visually distinct; only one can be active at a time.

## Working with the document model

**Reading user selection**

The selection model is straightforward: `UIDocument.Selection.GetElementIds()` returns the IDs of whatever the user has currently selected in the Revit viewport. From an ID you get the element, and from the element you can read properties.

```csharp
Selection selection = uidoc.Selection;
ICollection<ElementId> selectedIds = uidoc.Selection.GetElementIds();

foreach (ElementId id in selectedIds)
{
    Element element = uidoc.Document.GetElement(id);
    string name = element.Name;  // matches the name shown in Revit's Properties panel
}
```

For C-Compass, this was the starting point of the matching workflow: the user selects a BIM element representing a structural component, the plugin retrieves its properties, and those properties seed the image search.

**Querying by category**

When you need to find elements without user selection — for instance, to enumerate all columns or all floor slabs in a document — `FilteredElementCollector` is the right tool:

```csharp
FilteredElementCollector collector = new FilteredElementCollector(uidoc.Document);
collector.OfCategory(BuiltInCategory.OST_StructuralColumns);
IList<Element> elements = collector.ToElements();
```

The `BuiltInCategory` enum covers Revit's full taxonomy of element types. If you don't know which category a specific element belongs to, check its Properties panel in the Revit UI — the category is listed there.

## File import operations

C-Compass needed to bring in external reference geometry: AutoCAD drawings of the building's floor plans and Revit families (`.rfa`) containing the component models that would be placed in the scene.

**Importing DWG**

Revit has a built-in DWG import that the API wraps cleanly:

```csharp
DWGImportOptions options = new DWGImportOptions();
options.Placement = ImportPlacement.Centered;
options.OrientToView = true;
options.Unit = ImportUnit.Millimeter;

document.Import(dwgFilePath, options, document.ActiveView, out elementId);
```

The `ImportUnit` enum mirrors the unit options in the Revit UI. The import lands in the active view and returns an element ID so you can manipulate the imported geometry programmatically afterward.

**Importing RFA — and the idempotency problem**

Revit family files (`.rfa`) define reusable component types — structural members, fixtures, equipment. Loading one looks like this:

```csharp
document.LoadFamily(filepath, out family);
```

The problem: calling `LoadFamily` a second time for the same family returns null without throwing an exception. If your code then tries to use the returned family object, you get a `NullReferenceException`. The family was already in the document from the first load; the second call is silently ignored.

The fix is to search the document for the family if `LoadFamily` returns null:

```csharp
private Family loadRFA(Document document, string filepath)
{
    Family f = null;
    document.LoadFamily(filepath, out f);

    if (f == null)
    {
        // Already loaded — find it by name
        string familyName = Path.GetFileNameWithoutExtension(filepath);
        FilteredElementCollector collector = new FilteredElementCollector(document);
        FilteredElementIterator itr = collector.OfClass(typeof(Family)).GetElementIterator();
        itr.Reset();
        while (itr.MoveNext())
        {
            Element elem = (Element)itr.Current;
            if (elem.GetType() == typeof(Family) && elem.Name == familyName)
            {
                f = (Family)elem;
                break;
            }
        }
    }
    return f;
}
```

This pattern — try the operation, fall back to a document query if it indicates the resource already exists — comes up in other Revit API contexts too. The API doesn't raise exceptions for "already exists" states; it returns null or a false flag and expects you to check.

## What's actually hard

The Revit API itself isn't particularly difficult for a C# developer. The plugin loading mechanism is documented, the transaction model is explicit, and the UI building blocks map cleanly to what you'd expect.

The hard part is the BIM domain model. Revit distinguishes between:

- **Families** (a category of component, defined in an `.rfa` file)
- **Family Symbols / Types** (a specific configuration within a family — e.g., a particular beam size)
- **Family Instances** (an actual placed occurrence of a type in the model)

The API consistently operates at the level of Instances when you're selecting or placing things, but at the level of Symbols when you're configuring what gets placed. Getting this wrong means querying for instances and finding nothing, or placing a family without activating its symbol first (which throws a different error). The Revit documentation covers it, but it takes a few rounds of encountering these distinctions in practice to internalize them.

The image recognition side of C-Compass — matching field photos to BIM elements — was a separate prototype using template matching. That's a different problem, and the Revit API was only the delivery vehicle.

<!-- zh -->

2016 年，崑山科大大四與雲科大碩士班的銜接期，我被拉進一個 BIM 外包案。委託方是成功大學建築系的碩士生，論文主題是傳統木構造修復的電腦輔助設計。交付物是一個 Revit 插件——命名為 C-Compass——讓修復建築師在 Revit 環境中操作 BIM 模型時，能觸發影像辨識，將現場照片與建築構件自動對位。

我之前沒碰過 Revit。2019 年把技術細節整理成了一系列文章。這篇是那些筆記的重組。

## Revit 插件的運作方式

Revit（Autodesk 的 BIM 建模工具）對外暴露 .NET API。插件以 DLL 形式載入，Revit 透過放置在特定目錄的 `.addin` manifest 檔案來探索並載入。manifest 指向 DLL 並註冊進入點類別：

```xml
<RevitAddIns>
  <AddIn Type="Command">
    <Assembly>CCompass.dll</Assembly>
    <FullClassName>CCompass.CCompassCommand</FullClassName>
    <AddInId>...</AddInId>
    <Name>CCompass</Name>
  </AddIn>
</RevitAddIns>
```

每個指令實作 `IExternalCommand`，呼叫時帶入 `ExternalCommandData`，可取得當前 UI Document 與底層 Document 模型。兩者有明確分工：`UIDocument` 管的是畫面上的東西（選取狀態、視圖、viewport），`Document` 才是實際的 BIM 模型資料。

所有模型修改都必須包在 `Transaction` 裡：

```csharp
Transaction t = new Transaction(document, "Operation Name");
t.Start();
// 模型操作
t.Commit();
```

這不是選配——在 Transaction 外執行寫入操作會直接拋例外。這個設計也對應到使用者的 Undo 歷程：每個 commit 就是一個可復原的步驟。

## 建構 Ribbon UI

Revit 插件透過自訂 Ribbon Panel 對使用者呈現功能。API 提供五種按鈕類型，C-Compass 用了其中三種。

**PushButton**：最單純，一個按鈕對應一個指令。

**SplitButton**：下拉選單，把相關指令分組放在同一個按鈕位置。適合有一個主要動作加上幾個變體，但不想讓 Ribbon 太雜亂。

**RadioButtonGroup**：互斥模式切換。C-Compass 用它在「輪廓比對」和「紋理比對」兩種分析模式間切換。群組中只有一個按鈕能處於啟用狀態。

## 操作文件模型

**讀取使用者選取**

選取模型很直覺：`UIDocument.Selection.GetElementIds()` 回傳使用者當前在 Revit 視窗中選取的元件 ID。從 ID 取得 element，再從 element 讀取屬性。

```csharp
ICollection<ElementId> selectedIds = uidoc.Selection.GetElementIds();
foreach (ElementId id in selectedIds)
{
    Element element = uidoc.Document.GetElement(id);
    string name = element.Name;  // 對應 Revit Properties 面板中顯示的名稱
}
```

在 C-Compass 中，這是比對工作流程的起點：使用者選取代表某個結構構件的 BIM 元件，插件讀取其屬性，以此為種子驅動影像搜尋。

**依類別查詢**

需要不透過使用者選取就找到特定元件時——例如列舉文件中所有的柱或樓板——用 `FilteredElementCollector`：

```csharp
FilteredElementCollector collector = new FilteredElementCollector(uidoc.Document);
collector.OfCategory(BuiltInCategory.OST_StructuralColumns);
IList<Element> elements = collector.ToElements();
```

`BuiltInCategory` enum 涵蓋 Revit 的完整元件分類體系。不確定某個構件屬於哪個類別時，在 Revit 的 Properties 面板就可以查到。

## 檔案匯入操作

C-Compass 需要匯入外部參考幾何：建築平面圖的 AutoCAD 圖檔（.dwg）以及要放置到場景中的 Revit 族群檔案（.rfa）。

**匯入 DWG**

Revit 內建 DWG 匯入功能，API 有乾淨的封裝：

```csharp
DWGImportOptions options = new DWGImportOptions();
options.Placement = ImportPlacement.Centered;
options.OrientToView = true;
options.Unit = ImportUnit.Millimeter;

document.Import(dwgFilePath, options, document.ActiveView, out elementId);
```

`ImportUnit` enum 對應 Revit UI 中的單位選項。匯入後回傳 element ID，可繼續以程式操作匯入的幾何體。

**匯入 RFA——以及冪等性問題**

Revit 族群檔案（.rfa）定義可重複使用的元件類型——結構構件、設備器具等。載入的呼叫很簡單：

```csharp
document.LoadFamily(filepath, out family);
```

問題在於：對同一個族群第二次呼叫 `LoadFamily`，回傳 null 且不拋例外。族群已在第一次載入時進入文件了；第二次呼叫被靜默忽略。如果程式接著對回傳的 family 物件操作，就會得到 `NullReferenceException`。

解法是在 `LoadFamily` 回傳 null 時，從文件中搜尋該族群：

```csharp
private Family loadRFA(Document document, string filepath)
{
    Family f = null;
    document.LoadFamily(filepath, out f);

    if (f == null)
    {
        string familyName = Path.GetFileNameWithoutExtension(filepath);
        FilteredElementCollector collector = new FilteredElementCollector(document);
        FilteredElementIterator itr = collector.OfClass(typeof(Family)).GetElementIterator();
        itr.Reset();
        while (itr.MoveNext())
        {
            Element elem = (Element)itr.Current;
            if (elem.GetType() == typeof(Family) && elem.Name == familyName)
            {
                f = (Family)elem;
                break;
            }
        }
    }
    return f;
}
```

「先嘗試操作，若回傳值指示資源已存在則改為查詢文件」——這個模式在 Revit API 其他地方也會出現。API 不對「已存在」的狀態拋例外，而是回傳 null 或 false，讓你自己判斷。

## 真正難的地方

對於有 C# 基礎的開發者，Revit API 本身不算困難。插件載入機制有完整文件，Transaction 模型很明確，UI 建構模組也對應到預期的樣子。

難的是 BIM 的領域模型。Revit 嚴格區分：

- **Family**（元件的類別，定義在 `.rfa` 檔案中）
- **Family Symbol / Type**（Family 內的特定配置——例如某種尺寸規格的梁）
- **Family Instance**（某個 Type 在模型中的實際放置紀錄）

API 在選取或放置時操作的是 Instance 層，在配置要放什麼時操作的是 Symbol 層。搞錯層次的後果是：查詢 Instance 什麼都找不到，或放置族群時因為 Symbol 未啟用（`symbol.Activate()`）而拋例外。Revit 文件有說明，但這些區別需要在實際踩到錯之後才能真正內化。

C-Compass 的影像辨識部分——將現場照片與 BIM 構件對位——是另一個獨立的原型，使用影像模板比對。那是另一個問題，Revit API 只是交付的容器。
