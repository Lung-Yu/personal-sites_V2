import type { ComponentType, SVGAttributes } from 'react'
import {
  SiSpringboot,
  SiPython,
  SiDocker,
  SiReact,
  SiTerraform,
  SiJenkins,
  SiApachekafka,
  SiKubernetes,
  SiGooglecloud,
  SiArgo,
  SiOpentelemetry,
  SiKeycloak,
  SiGithubcopilot,
  SiClaude,
  SiDotnet,
  SiSharp,
  SiGitlab,
  SiFlutter,
  SiBurpsuite,
  SiKalilinux,
  SiGnubash,
  SiWireshark,
  SiPostgresql,
  SiNotebooklm,
} from '@icons-pack/react-simple-icons'

export interface TechIconEntry {
  Icon: ComponentType<SVGAttributes<SVGElement> & { size?: number; color?: string; title?: string }>
  /** CSS color value; use 'currentColor' for near-black brand icons that need dark-mode adaptation */
  color: string
}

/**
 * Maps techStack string keys to their Simple Icons component + brand colour.
 * Keys absent from this map (undefined) render as text-only chips.
 */
export const TECH_ICONS: Record<string, TechIconEntry | undefined> = {
  'Spring Boot':      { Icon: SiSpringboot,    color: '#6DB33F' },
  'Python':           { Icon: SiPython,         color: '#3776AB' },
  'Docker':           { Icon: SiDocker,         color: '#2496ED' },
  'React':            { Icon: SiReact,          color: '#61DAFB' },
  'Terraform':        { Icon: SiTerraform,      color: '#7B42BC' },
  'Jenkins':          { Icon: SiJenkins,        color: '#D24939' },
  'Kafka':            { Icon: SiApachekafka,    color: 'currentColor' }, // near-black brand
  'GKE':              { Icon: SiKubernetes,     color: '#326CE5' },
  'GCP':              { Icon: SiGooglecloud,    color: '#4285F4' },
  'ArgoCD':           { Icon: SiArgo,           color: '#EF7B4D' },
  'OpenTelemetry':    { Icon: SiOpentelemetry,  color: '#F5A800' },
  'Keycloak OAuth2':  { Icon: SiKeycloak,       color: '#4D9ECD' },
  'GitHub Copilot':   { Icon: SiGithubcopilot,  color: 'currentColor' }, // dark brand
  'Claude':           { Icon: SiClaude,         color: '#D4A27F' },
  '.NET 8':           { Icon: SiDotnet,         color: '#512BD4' },
  'EF Core':          { Icon: SiDotnet,         color: '#512BD4' },
  'C#':               { Icon: SiSharp,          color: '#512BD4' },
  'GitLab CI':        { Icon: SiGitlab,         color: '#FC6D26' },
  'Flutter':          { Icon: SiFlutter,        color: '#02569B' },
  'Burp Suite':       { Icon: SiBurpsuite,      color: '#FF6633' },
  'Kali Linux':       { Icon: SiKalilinux,      color: '#557C94' },
  'Bash':             { Icon: SiGnubash,        color: '#4EAA25' },
  'Wireshark':        { Icon: SiWireshark,      color: '#1679A7' },
  'pgvector':         { Icon: SiPostgresql,     color: '#4169E1' },
  'NotebookLLM':      { Icon: SiNotebooklm,     color: '#4285F4' },
  // Text-only (no Simple Icon available): Java, KrakenD, KEDA, RAG,
  // Hexagonal Architecture, CQRS, Event Sourcing, Sealed Secrets,
  // DevSecOps, Fortify SCA, WebInspect, testssl
}
