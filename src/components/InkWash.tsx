import '../styles/InkWash.css'

export default function InkWash() {
  return (
    <div className="ink-wash" aria-hidden="true">
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* 主墨團 filter — 強烈有機邊緣 */}
          <filter id="iw-f-main" x="-35%" y="-35%" width="170%" height="170%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.011 0.014"
              numOctaves="5"
              seed="3"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                values="0.009 0.012;0.014 0.018;0.010 0.013;0.009 0.012"
                dur="20s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="70"
              xChannelSelector="R"
              yChannelSelector="G"
              result="d"
            />
            <feGaussianBlur in="d" stdDeviation="32" />
          </filter>

          {/* 中型 filter */}
          <filter id="iw-f-mid" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.018 0.022"
              numOctaves="4"
              seed="7"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                values="0.015 0.019;0.022 0.028;0.017 0.021;0.015 0.019"
                dur="14s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="45"
              xChannelSelector="R"
              yChannelSelector="G"
              result="d"
            />
            <feGaussianBlur in="d" stdDeviation="20" />
          </filter>

          {/* 小墨點 filter */}
          <filter id="iw-f-sm" x="-100%" y="-100%" width="300%" height="300%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.032"
              numOctaves="3"
              seed="12"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                values="0.028;0.038;0.031;0.028"
                dur="9s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="28"
              xChannelSelector="R"
              yChannelSelector="G"
              result="d"
            />
            <feGaussianBlur in="d" stdDeviation="12" />
          </filter>
        </defs>

        {/* ── 主潑墨 — 右中，頭像背後 ── */}
        <ellipse
          cx="1020" cy="400"
          rx="310" ry="255"
          fill="rgba(26,22,20,0.70)"
          filter="url(#iw-f-main)"
          className="iw-main"
        />

        {/* ── 次墨 — 左下 ── */}
        <ellipse
          cx="280" cy="680"
          rx="175" ry="130"
          fill="rgba(26,22,20,0.36)"
          filter="url(#iw-f-mid)"
          className="iw-mid1"
        />

        {/* ── 次墨 — 右下 ── */}
        <ellipse
          cx="1280" cy="760"
          rx="130" ry="100"
          fill="rgba(26,22,20,0.28)"
          filter="url(#iw-f-mid)"
          className="iw-mid2"
        />

        {/* ── 小墨點 — 左上 ── */}
        <ellipse
          cx="200" cy="160"
          rx="62" ry="48"
          fill="rgba(26,22,20,0.18)"
          filter="url(#iw-f-sm)"
          className="iw-sm1"
        />

        {/* ── 小墨點 — 右上 ── */}
        <ellipse
          cx="1340" cy="130"
          rx="50" ry="38"
          fill="rgba(26,22,20,0.15)"
          filter="url(#iw-f-sm)"
          className="iw-sm2"
        />

        {/* ── 飛濺細點 — 中下 ── */}
        <ellipse
          cx="720" cy="830"
          rx="42" ry="30"
          fill="rgba(26,22,20,0.14)"
          filter="url(#iw-f-sm)"
          className="iw-sm3"
        />
      </svg>
    </div>
  )
}
