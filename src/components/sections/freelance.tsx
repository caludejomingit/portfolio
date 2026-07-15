import { Reveal } from "@/components/motion/reveal";
import { links } from "@/lib/data";

const services = [
  {
    name: "Data Visualization",
    description: "Dashboards and reports that make numbers legible — Power BI, Excel, and custom web dashboards.",
    icon: (
      <path
        d="M8 30 L8 6 M8 30 L32 30 M14 26 L14 16 M20 26 L20 10 M26 26 L26 20"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    name: "App Development",
    description: "Cross-platform mobile apps with React Native and Expo, backed by Supabase.",
    icon: (
      <>
        <rect x="11" y="5" width="16" height="28" rx="4" stroke="currentColor" strokeWidth="2.2" />
        <line x1="16" y1="28" x2="22" y2="28" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </>
    ),
  },
  {
    name: "Web Development",
    description: "Fast, conversion-focused sites built with Next.js — from marketing pages to full products.",
    icon: (
      <>
        <rect x="5" y="8" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="2.2" />
        <path d="M5 14 L33 14" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="9.5" cy="11" r="1" fill="currentColor" />
        <circle cx="13" cy="11" r="1" fill="currentColor" />
      </>
    ),
  },
  {
    name: "Graphic & UI Design",
    description: "Brand systems, identity, and interface design that feel considered, not templated.",
    icon: (
      <>
        <circle cx="19" cy="19" r="14" stroke="currentColor" strokeWidth="2.2" />
        <path d="M19 9 C24 12, 24 18, 19 19 C14 20, 14 26, 19 29" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      </>
    ),
  },
];

export function Freelance() {
  return (
    <section id="freelance" className="border-b border-border bg-forest text-cream">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-sage">
            Freelance
          </span>
          <h2 className="mt-4 max-w-xl text-balance font-heading text-3xl font-medium leading-tight text-cream sm:text-4xl">
            Under the brand{" "}
            <span className="font-mono not-italic text-sage">
              @thinkwithjomin
            </span>
            , I take on select freelance work.
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-cream/70">
            Data visualization, app development, web development, and design
            — for founders and small teams who want work that&apos;s both
            functional and considered.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.name} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-cream/15 bg-cream/[0.04] p-6 transition-colors hover:border-sage/50">
                <svg viewBox="0 0 38 38" className="h-9 w-9 text-sage" fill="none">
                  {service.icon}
                </svg>
                <h3 className="mt-4 font-heading text-lg text-cream">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <a
            href={links.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-14 inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3 font-mono text-sm text-cream transition-colors hover:border-sage hover:text-sage"
          >
            Follow @thinkwithjomin on Instagram
            <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
