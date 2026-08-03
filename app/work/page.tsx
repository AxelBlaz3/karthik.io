const jobs = [
  {
    num: "01",
    company: "Irdeto",
    role: "Mobile Application Developer",
    period: "Sep 2023 — Present",
    location: "Pontiac, MI",
    type: "Full-time",
    summary:
      "Part of a three-person mobile team delivering the Keystone digital-key SDK — software that turns smartphones into secure car keys for automotive OEMs. Responsible for the full cross-platform mobile stack from UI to low-level transport.",
    contributions: [
      {
        title: "SDK Architecture",
        detail:
          "Designed and built the React Native wrapper around Flutter/Dart plugins using a Flutter-as-a-Module approach, exposing a clean JS bridge via Kotlin and Obj-C translation layers.",
      },
      {
        title: "Cryptographic Bridge",
        detail:
          "Implemented the JNI/Swift bridge for secure enclave access and BLE key-transfer operations, achieving sub-3ms round-trip latency for cryptographic handshakes.",
      },
      {
        title: "BLE Firmware Transport",
        detail:
          "Made targeted changes at the hardware/firmware level in C (Segger Embedded Studio) — tuning connection interval, MTU, and Data Length Extension parameters. A focused MTU configuration change on the mobile SDK side improved firmware-over-the-air transfer throughput from ~1.5–2 KB/s to ~7.5 KB/s.",
      },
      {
        title: "Release Pipeline",
        detail:
          "Engineered the complete GitLab CI → JFrog Artifactory release pipeline: semantic versioning, changelog automation, multi-platform artifact publishing, and OEM partner integration.",
      },
      {
        title: "Code Quality",
        detail:
          "Led code reviews enforcing Clean Architecture and SOLID principles across the SDK. Authored integration test suites for BLE connectivity and key lifecycle flows.",
      },
      {
        title: "UI/UX & Design",
        detail:
          "Collaborated with teammates in Figma to improve the Keystone app's user experience — working through typography, color systems, shapes, and component consistency using Material Design guidelines, then implementing the designs pixel-accurately in Flutter.",
      },
    ],
    stack: ["Flutter", "Dart", "Kotlin", "Swift", "JNI / C", "React Native", "BLE", "Segger Embedded Studio", "Material Design 3", "Figma", "GitLab CI", "JFrog"],
  },
  {
    num: "02",
    company: "ScoutBetter",
    role: "Full Stack Developer",
    period: "May 2023 — Aug 2023",
    location: "Remote",
    type: "Volunteer / Part-time",
    summary:
      "Contributed to an end-to-end talent scouting platform connecting athletes with recruiters.",
    contributions: [
      {
        title: "Web & Mobile Interfaces",
        detail:
          "Built responsive web dashboards in React and mobile screens in Flutter, applying Material Design principles for typography, color, and layout to ensure a consistent, accessible experience across platforms.",
      },
      {
        title: "Design System",
        detail:
          "Worked from Figma mockups to implement UI components faithfully, maintaining visual consistency between design and production code.",
      },
      {
        title: "API Integration",
        detail:
          "Integrated RESTful APIs and real-time data feeds for live match statistics and recruitment analytics.",
      },
    ],
    stack: ["React", "Flutter", "REST APIs", "Firebase", "Figma", "Material Design"],
  },
  {
    num: "03",
    company: "Central Michigan University",
    role: "Graduate Teaching Assistant",
    period: "Jan 2023 — May 2023",
    location: "Mount Pleasant, MI",
    type: "Part-time",
    summary:
      "Supported 60+ undergraduate students in core Computer Science courses.",
    contributions: [
      {
        title: "Mentorship",
        detail:
          "Conducted weekly office hours and lab sessions covering data structures, algorithms, and OOP fundamentals.",
      },
      {
        title: "Assessment",
        detail:
          "Graded programming assignments and provided detailed feedback to reinforce core engineering concepts.",
      },
    ],
    stack: ["Java", "Python", "Data Structures", "Algorithms"],
  },
  {
    num: "04",
    company: "WieLabs",
    role: "Software Engineer",
    period: "Dec 2019 — Nov 2021",
    location: "Hyderabad, India",
    type: "Full-time",
    summary:
      "Delivered 7+ production mobile applications end-to-end — from design in Figma to native Android/Flutter UI to Python/Node backends — across social, IoT, news, and retail domains.",
    contributions: [
      {
        title: "Design Collaboration",
        detail:
          "Worked daily alongside an in-house graphic designer in Figma — contributing to app wireframes, Material Design–based color palettes and typography scales, component systems, icon sets, and shape language, then owning the engineering implementation.",
      },
      {
        title: "Hing & Carnival",
        detail:
          "Social recipe-sharing and events apps built with Flutter + Python Flask. Implemented HLS adaptive video streaming via FFMPEG transcoding workers; Hing peaked at 10K+ MAU.",
      },
      {
        title: "Loudcar",
        detail:
          "IoT controller app using Bluetooth Classic (RFCOMM) for real-time LED display board programming. Custom frame-transfer protocol and animation sequencer.",
      },
      {
        title: "Witness & Trendition",
        detail:
          "Native Android (Kotlin) apps for news aggregation and retail inventory management with barcode scanning and offline-first SQLite storage.",
      },
      {
        title: "Clock365",
        detail:
          "Barcode-based employee attendance system with a FastAPI backend, offline sync, and admin reporting dashboard.",
      },
    ],
    stack: ["Kotlin", "Flutter", "Python Flask", "FastAPI", "FFMPEG", "Bluetooth Classic", "SQLite", "Firebase", "Figma", "Material Design"],
  },
];

const education = [
  {
    degree: "MS Computer Science",
    institution: "Central Michigan University",
    period: "2022 — 2024",
    gpa: "3.9 / 4.0",
    note: "Advanced Algorithms · Systems Engineering",
  },
  {
    degree: "B.Tech Computer Science",
    institution: "BV Raju Institute of Technology",
    period: "2018 — 2022",
    gpa: "9.7 / 10",
    note: "Software Engineering · Core CS",
  },
];

export default function WorkPage() {
  return (
    <div className="max-w-screen-lg mx-auto px-6 md:px-10 py-20">

      {/* ── Page heading ── */}
      <div className="border-b border-border pb-10 mb-16 grid md:grid-cols-[14rem_1fr] gap-6">
        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
          Work
        </p>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Experience</h1>
          <p className="mt-3 text-sm text-muted-foreground max-w-md leading-relaxed">
            Five years of mobile engineering across automotive security, social platforms,
            IoT, and education — from Figma to firmware.
          </p>
        </div>
      </div>

      {/* ── Jobs ── */}
      <div className="space-y-24">
        {jobs.map((job) => (
          <article key={job.num} className="grid md:grid-cols-[14rem_1fr] gap-8 fade-up">

            {/* Left col: meta */}
            <div className="md:pt-1">
              <p className="font-mono text-[10px] text-muted-foreground section-number mb-4">
                {job.num}
              </p>
              <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                {job.period}
              </p>
              <p className="font-mono text-[11px] text-muted-foreground mt-1">
                {job.location}
              </p>
              <p className="font-mono text-[10px] text-muted-foreground mt-1 uppercase tracking-wide">
                {job.type}
              </p>
            </div>

            {/* Right col: content */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight">{job.company}</h2>
              <p className="text-sm text-muted-foreground mt-0.5">{job.role}</p>

              <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-prose">
                {job.summary}
              </p>

              {/* Contributions */}
              <div className="mt-8 space-y-0 border-t border-border">
                {job.contributions.map((c) => (
                  <div key={c.title} className="py-5 border-b border-border grid sm:grid-cols-[10rem_1fr] gap-3">
                    <span className="text-xs font-medium text-foreground pt-0.5 shrink-0">
                      {c.title}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.detail}</p>
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div className="mt-6 flex flex-wrap gap-1.5">
                {job.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] text-muted-foreground border border-border rounded px-2 py-0.5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ── Education ── */}
      <div className="mt-32 border-t border-border pt-16 grid md:grid-cols-[14rem_1fr] gap-8">
        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
          Education
        </p>
        <div className="space-y-0 border-t border-border">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="py-6 border-b border-border grid sm:grid-cols-[1fr_auto] gap-4 items-baseline"
            >
              <div>
                <p className="text-sm font-medium">{edu.degree}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{edu.institution}</p>
                <p className="font-mono text-[11px] text-muted-foreground mt-2">{edu.note}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-mono text-xs text-muted-foreground">{edu.period}</p>
                <p className="font-mono text-xs font-medium text-foreground mt-1">GPA {edu.gpa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
