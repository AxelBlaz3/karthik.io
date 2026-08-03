import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/* ── small reusable row ── */
function InfoRow({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div className="flex items-baseline gap-4 py-3 border-b border-border hover-row px-2 -mx-2 group">
      <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest w-24 shrink-0">
        {label}
      </span>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-foreground flex items-center gap-1 group-hover:underline underline-offset-2"
        >
          {value}
          <ArrowUpRight className="h-3 w-3 text-muted-foreground" />
        </a>
      ) : (
        <span className="text-sm text-foreground">{value}</span>
      )}
    </div>
  );
}

/* ── nav table row ── */
function NavRow({
  num,
  label,
  desc,
  href,
}: {
  num: string;
  label: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-4 border-b border-border hover-row px-2 -mx-2 transition-colors"
    >
      <span className="font-mono text-[10px] text-muted-foreground section-number">{num}</span>
      <span className="text-sm font-medium group-hover:underline underline-offset-2 decoration-muted-foreground">
        {label}
      </span>
      <span className="hidden sm:block font-mono text-[11px] text-muted-foreground max-w-xs text-right">
        {desc}
      </span>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto px-6 md:px-10">

      {/* ── HERO ── */}
      <section className="pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-[1fr_auto] gap-12 items-end border-b border-border">
        <div>
          {/* Name */}
          <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-semibold tracking-tight leading-[1.0] fade-up d1">
            Karthik
            <br />
            Gaddam
            <span className="cursor-blink ml-1" />
          </h1>

          {/* Role */}
          <p className="mt-6 text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-md fade-up d2">
            Mobile engineer who loves the full picture — from Figma to firmware. Currently
            shipping secure automotive infrastructure at Irdeto.
          </p>

          {/* Status */}
          <div className="mt-8 inline-flex items-center gap-2 fade-up d3">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            <span className="font-mono text-xs text-muted-foreground">
              Currently · Irdeto, Pontiac MI
            </span>
          </div>
        </div>

        {/* Right: quick facts */}
        <div className="md:w-56 space-y-0 fade-up d3">
          <InfoRow label="Based" value="Pontiac, MI" />
          <InfoRow label="Open to" value="All opportunities" />
          <InfoRow label="Exp." value="5+ years" />
          <InfoRow label="Education" value="MS CS — GPA 3.9" />
          <InfoRow
            label="GitHub"
            value="AxelBlaz3"
            href="https://github.com/AxelBlaz3"
          />
          <InfoRow
            label="LinkedIn"
            value="karthikgaddam4"
            href="https://linkedin.com/in/karthikgaddam4"
          />
        </div>
      </section>

      {/* ── NAVIGATION TABLE ── */}
      <section className="py-16 fade-up d4">
        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-6">
          Navigate
        </p>
        <NavRow num="01" label="Work Experience" desc="Irdeto · WieLabs · ScoutBetter · CMU" href="/work" />
        <NavRow num="02" label="Projects" desc="SDKs · Apps · Figma · Backends" href="/projects" />
        <NavRow num="03" label="About" desc="Skills · Education · Interests" href="/about" />
      </section>

      {/* ── NOW ── */}
      <section className="py-16 border-t border-border grid md:grid-cols-[14rem_1fr] gap-8 fade-up d5">
        <div>
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            Now
          </p>
        </div>
        <div className="space-y-4 max-w-prose">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Shipping secure digital-key infrastructure at{" "}
            <span className="text-foreground font-medium">Irdeto</span> — the SDK that lets
            your phone become your car key. On the mobile team, I span everything from Figma
            design reviews with colleagues to JNI cryptographic bridges and BLE firmware
            transport tuning.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Outside of work: badminton, suspense films and anime, and spending time
            under the hood of my cars — I retrofitted Android Auto and CarPlay onto my
            Mazda 6, and I&apos;m currently building a Raspberry Pi–based infotainment
            system for my 2010 Acura TL.
          </p>
        </div>
      </section>

      {/* ── SELECTED WORK PREVIEW ── */}
      <section className="py-16 border-t border-border fade-up d6">
        <div className="grid md:grid-cols-[14rem_1fr] gap-8">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            Selected work
          </p>
          <div>
            {[
              {
                company: "Irdeto",
                role: "Mobile Application Developer",
                period: "2023 — now",
                note: "Keystone SDK · BLE · React Native wrapper",
              },
              {
                company: "WieLabs",
                role: "Software Engineer",
                period: "2019 — 2021",
                note: "7 apps · Flutter · Native Android · Flask",
              },
              {
                company: "CMU",
                role: "Graduate Teaching Assistant",
                period: "2023",
                note: "CS fundamentals · 60+ students",
              },
            ].map((item) => (
              <Link
                key={item.company}
                href="/work"
                className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6 py-5 border-b border-border hover-row px-2 -mx-2"
              >
                <div>
                  <span className="text-sm font-medium group-hover:underline underline-offset-2 decoration-muted-foreground">
                    {item.company}
                  </span>
                  <span className="ml-3 text-sm text-muted-foreground">{item.role}</span>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="font-mono text-[11px] text-muted-foreground hidden md:block">
                    {item.note}
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground">{item.period}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
