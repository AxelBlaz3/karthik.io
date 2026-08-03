import { ArrowUpRight } from "lucide-react";

const skills: { area: string; items: string[] }[] = [
  {
    area: "Languages",
    items: ["Kotlin", "Dart", "Swift", "C / C++", "Python", "TypeScript", "Java", "SQL"],
  },
  {
    area: "Mobile",
    items: ["Android SDK", "Flutter", "Jetpack Compose", "React Native", "AAOS", "SwiftUI"],
  },
  {
    area: "Connectivity",
    items: ["BLE (GATT · L2CAP)", "Bluetooth Classic", "MQTT", "JNI", "Method Channels", "NDK"],
  },
  {
    area: "Media",
    items: ["FFMPEG", "HLS / DASH", "ExoPlayer", "AVFoundation"],
  },
  {
    area: "Backend",
    items: ["Python Flask", "FastAPI", "Node.js", "Firebase", "PostgreSQL", "SQLite / Room"],
  },
  {
    area: "DevOps",
    items: ["GitLab CI", "JFrog Artifactory", "GitHub Actions", "Gradle", "CMake", "Docker"],
  },
  {
    area: "Design",
    items: ["Figma (wireframing, components, design review)", "Material Design 3", "Human Interface Guidelines", "Accessibility (a11y)"],
  },
  {
    area: "Architecture",
    items: ["Clean Architecture", "MVVM", "Repository Pattern", "SOLID", "Dependency Injection"],
  },
  {
    area: "Exploring",
    items: ["AAOS / Vehicle HAL", "Raspberry Pi (embedded Linux)", "Custom Infotainment OS", "Rust"],
  },
];

const links = [
  { label: "GitHub", href: "https://github.com/AxelBlaz3", note: "AxelBlaz3" },
  { label: "LinkedIn", href: "https://linkedin.com/in/karthikgaddam4", note: "karthikgaddam4" },
  { label: "Email", href: "mailto:karthikgaddam4@gmail.com", note: "karthikgaddam4@gmail.com" },
];

export default function AboutPage() {
  return (
    <div className="max-w-screen-lg mx-auto px-6 md:px-10 py-20">

      {/* ── Heading ── */}
      <div className="border-b border-border pb-10 mb-16 grid md:grid-cols-[14rem_1fr] gap-6">
        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
          About
        </p>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Karthik Gaddam</h1>
          <p className="mt-3 text-sm text-muted-foreground max-w-md leading-relaxed">
            Mobile engineer and full-stack builder. From Figma to pixel-perfect UI
            to the server-side logic behind it.
          </p>
        </div>
      </div>

      {/* ── Bio ── */}
      <section className="border-b border-border pb-16 mb-16 grid md:grid-cols-[14rem_1fr] gap-8 fade-up">
        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
          Background
        </p>
        <div className="space-y-4 max-w-prose">
          <p className="text-sm text-muted-foreground leading-relaxed">
            My fascination with mobile started as a kid — I remember staring at a phone screen
            wondering how a tap could make things happen. How did someone design that button?
            Who wrote the code behind it? That curiosity pulled me into CS, through Android
            development, and into everything in between — UI, platform internals, Figma
            design reviews, backend APIs.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I hold an MS in Computer Science from Central Michigan University (GPA 3.9) and
            have shipped production code across automotive, social, IoT, and news domains.
            Design has always been part of that work too — not just engineering. At WieLabs I
            collaborated daily with a graphic designer in Figma; at Irdeto I worked alongside
            colleagues to improve the UX of the Keystone app, translating mockups into
            pixel-accurate Flutter screens and contributing real product feedback.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Currently at <span className="text-foreground font-medium">Irdeto</span> in Pontiac, MI,
            on a three-person mobile team delivering the Keystone digital-key SDK. I maintain
            four repositories end-to-end: the Flutter app, the SDK, the React Native wrapper,
            and a POC demonstrating cross-platform integration. Design is part of the job too
            — working in Figma with colleagues on typography, color, and component systems
            then bringing those decisions into Flutter with Material Design 3.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I think of myself as a full-stack mobile engineer — comfortable owning the UI layer,
            the server-side logic, and the in-between glue. The stack changes; the curiosity
            doesn&apos;t.
          </p>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="border-b border-border pb-16 mb-16 fade-up">
        <div className="grid md:grid-cols-[14rem_1fr] gap-8">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
            Skills
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8">
            {skills.map((group) => (
              <div key={group.area}>
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-3">
                  {group.area}
                </p>
                <ul className="space-y-1">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground leading-snug flex items-center gap-2">
                      <span className="h-px w-3 bg-border shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <section className="border-b border-border pb-16 mb-16 fade-up">
        <div className="grid md:grid-cols-[14rem_1fr] gap-8">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
            Education
          </p>
          <div className="space-y-0 border-t border-border">
            {[
              { degree: "MS Computer Science", inst: "Central Michigan University", period: "2022–2024", gpa: "3.9 / 4.0" },
              { degree: "B.Tech Computer Science", inst: "BV Raju Institute of Technology", period: "2018–2022", gpa: "9.7 / 10" },
            ].map((e) => (
              <div key={e.degree} className="py-6 border-b border-border grid sm:grid-cols-[1fr_auto] gap-4 items-baseline">
                <div>
                  <p className="text-sm font-medium">{e.degree}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{e.inst}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-mono text-[11px] text-muted-foreground">{e.period}</p>
                  <p className="font-mono text-xs font-medium text-foreground mt-1">GPA {e.gpa}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Interests ── */}
      <section className="border-b border-border pb-16 mb-16 fade-up">
        <div className="grid md:grid-cols-[14rem_1fr] gap-8">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
            Away from keyboard
          </p>
          <div className="border-t border-border">
            {[
              {
                label: "Badminton",
                detail: "My go-to sport. Good for the reflexes, bad for the ego.",
              },
              {
                label: "Movies & anime",
                detail:
                  "Mainly suspense and psychological thrillers. Always have a watchlist that's longer than my backlog of GitHub issues.",
              },
              {
                label: "Cars & wrenching",
                detail:
                  "I enjoy working on ICE vehicles — diagnosing, fixing, learning how things actually work under the hood. Haven't touched a hybrid yet, but it's on the list.",
              },
              {
                label: "Retrofitting & mods",
                detail:
                  "Retrofitted an aftermarket infotainment module to add Android Auto and CarPlay to my Mazda 6. The satisfaction of making old hardware do new things is hard to beat.",
              },
              {
                label: "Pi Infotainment OS",
                detail:
                  "Currently exploring building a custom infotainment system for my 2010 Acura TL using a Raspberry Pi — the factory tech is too far behind to leave alone.",
              },
            ].map((item) => (
              <div key={item.label} className="py-5 border-b border-border grid sm:grid-cols-[10rem_1fr] gap-3">
                <span className="text-xs font-medium text-foreground pt-0.5 shrink-0">{item.label}</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}

      <section className="fade-up">
        <div className="grid md:grid-cols-[14rem_1fr] gap-8">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
            Contact
          </p>
          <div className="border-t border-border">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel={l.href.startsWith("mailto") ? undefined : "noreferrer"}
                className="group flex items-center justify-between py-5 border-b border-border hover-row px-2 -mx-2 transition-colors"
              >
                <span className="text-sm font-medium group-hover:underline underline-offset-2 decoration-muted-foreground">
                  {l.label}
                </span>
                <span className="flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
                  {l.note}
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
