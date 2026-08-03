import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    num: "01",
    name: "Irdeto Keystone SDK",
    category: "Professional SDK",
    year: "2023–now",
    description:
      "A secure digital-key SDK deployed in production automotive environments — the software layer that lets a phone replace a car key. I own the entire mobile stack: Flutter plugin → React Native wrapper → BLE transport → CI/CD pipeline. I actively maintain four repositories end-to-end: the Keystone Flutter app, the SDK itself, the React Native wrapper, and a standalone POC that demonstrates the full communication flow between a React Native app and the Keystone Dart SDK.",
    url: "https://irdeto.com/smart-mobility/keystone-digital-key",
    github: null,
    tags: ["Flutter", "JNI/C", "Kotlin", "Swift", "BLE", "GitLab CI"],
    highlight: true,
  },
  {
    num: "02",
    name: "Hing",
    category: "Social Platform · Mobile",
    year: "2020",
    description:
      "Social recipe-sharing app with video at its core. Flutter frontend + Python/Flask backend with FFMPEG-powered HLS transcoding. Designed in Figma with a Material Design–based visual language; peaked at 10K+ MAU during WieLabs tenure.",
    url: null,
    github: "https://github.com/AxelBlaz3/Hing",
    tags: ["Flutter", "Python Flask", "FFMPEG", "HLS", "Firebase", "Figma", "Material Design"],
    highlight: false,
  },
  {
    num: "03",
    name: "Carnival",
    category: "Events Platform · Mobile",
    year: "2020",
    description:
      "Event discovery and ticketing app built at WieLabs. Flutter frontend backed by Python/Flask, letting users browse, RSVP, and share local events. UI designed in Figma with the in-house designer — covering typography, color system, and component library.",
    url: null,
    github: null,
    tags: ["Flutter", "Python Flask", "Firebase", "Figma", "Material Design"],
    highlight: false,
  },
  {
    num: "04",
    name: "Modern Notes",
    category: "Android App",
    year: "2021",
    description:
      "Production-quality Android notes app built with Jetpack Compose and Clean Architecture. Offline-first with Room, biometric lock, rich-text editing, and tag-based organization.",
    url: null,
    github: "https://github.com/AxelBlaz3/Notes",
    tags: ["Kotlin", "Jetpack Compose", "Room", "MVVM", "Hilt"],
    highlight: false,
  },
  {
    num: "05",
    name: "Codex Kernel",
    category: "Personal · Android",
    year: "2021",
    description:
      "A custom Android kernel built for personal devices — a side project that grew out of curiosity about what happens below the application layer.",
    url: null,
    github: "https://github.com/AxelBlaz3/Codex-Kernel",
    tags: ["C", "Linux Kernel", "Android"],
    highlight: false,
  },
  {
    num: "06",
    name: "Phishing URL Detector",
    category: "Academic · ML",
    year: "2023",
    description:
      "Graduate project: an LSTM-based classifier for detecting malicious URLs, trained on 600K+ samples. Achieved 96% test accuracy.",
    url: null,
    github: null,
    tags: ["Python", "TensorFlow", "LSTM"],
    highlight: false,
  },
  {
    num: "07",
    name: "Loudcar",
    category: "IoT · Bluetooth",
    year: "2020",
    description:
      "Flutter app that programs LED display boards over Bluetooth Classic. Custom RFCOMM frame-transfer protocol, real-time animation sequencer, and per-segment color control.",
    url: null,
    github: null,
    tags: ["Flutter", "Bluetooth Classic", "RFCOMM", "IoT"],
    highlight: false,
  },
  {
    num: "08",
    name: "Local LLM Inference",
    category: "Exploration · AI",
    year: "Ongoing",
    description:
      "Ongoing experiment: running quantized LLMs on a Ryzen 9 9900X. Benchmarking llama.cpp vs. Ollama vs. MLX at various quantization levels. Exploring KV-cache optimizations and context-length extensions.",
    url: null,
    github: null,
    tags: ["Python", "llama.cpp", "Linux", "Hardware"],
    highlight: false,
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-screen-lg mx-auto px-6 md:px-10 py-20">

      {/* ── Heading ── */}
      <div className="border-b border-border pb-10 mb-16 grid md:grid-cols-[14rem_1fr] gap-6">
        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
          Projects
        </p>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Built things</h1>
          <p className="mt-3 text-sm text-muted-foreground max-w-md leading-relaxed">
            SDKs, mobile apps, and production applications — a mix of professional
            work and personal exploration.
          </p>
        </div>
      </div>

      {/* ── Project list ── */}
      <div className="border-t border-border">
        {projects.map((p) => (
          <article
            key={p.num}
            className="py-10 border-b border-border grid md:grid-cols-[14rem_1fr] gap-8 group fade-up"
          >
            {/* Left: meta */}
            <div className="md:pt-1">
              <p className="font-mono text-[10px] text-muted-foreground section-number mb-4">
                {p.num}
              </p>
              <p className="font-mono text-[11px] text-muted-foreground">{p.year}</p>
              <p className="font-mono text-[10px] text-muted-foreground mt-1 leading-relaxed">
                {p.category}
              </p>
            </div>

            {/* Right: content */}
            <div>
              {/* Title row */}
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-base font-semibold">{p.name}</h2>
                <div className="flex items-center gap-1 shrink-0">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[10px] text-muted-foreground hover:text-foreground flex items-center gap-0.5 transition-colors"
                    >
                      GitHub <ArrowUpRight className="h-2.5 w-2.5" />
                    </a>
                  )}
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[10px] text-muted-foreground hover:text-foreground flex items-center gap-0.5 transition-colors ml-3"
                    >
                      Visit <ArrowUpRight className="h-2.5 w-2.5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-prose">
                {p.description}
              </p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] text-muted-foreground border border-border rounded px-2 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Currently maintaining */}
      <section className="mt-20 border-t border-border pt-16">
        <div className="grid md:grid-cols-[14rem_1fr] gap-8">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
            Currently maintaining
          </p>
          <div className="border-t border-border">
            {[
              {
                repo: "Keystone App",
                desc: "Production Flutter application — the end-user digital-key experience.",
              },
              {
                repo: "Keystone SDK",
                desc: "The core SDK library distributed to OEM partners via JFrog Artifactory.",
              },
              {
                repo: "React Native Wrapper",
                desc: "Flutter-as-a-Module bridge exposing the SDK to React Native consumers over a Kotlin / Obj-C JS interface.",
              },
              {
                repo: "Keystone RN × Dart POC",
                desc: "Standalone proof-of-concept demonstrating the full communication flow between a React Native app and the Keystone Dart SDK. Used for partner onboarding and integration testing.",
              },
            ].map((item) => (
              <div key={item.repo} className="py-5 border-b border-border grid sm:grid-cols-[12rem_1fr] gap-3">
                <span className="font-mono text-xs text-foreground pt-0.5 shrink-0">{item.repo}</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GitHub link ── */}
      <div className="mt-16 grid md:grid-cols-[14rem_1fr] gap-6">
        <div />
        <a
          href="https://github.com/AxelBlaz3"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors link-slide"
        >
          All 57+ repositories on GitHub
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

    </div>
  );
}
