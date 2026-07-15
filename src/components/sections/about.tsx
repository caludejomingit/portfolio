import { Reveal } from "@/components/motion/reveal";
import { GrowthMark } from "@/components/illustrations/growth-mark";

const education = [
  {
    degree: "MCA, Data Science",
    school: "Marian College, Kuttikkanam",
  },
  {
    degree: "BCA",
    school: "St. Thomas College, Pala",
  },
];

export function About() {
  return (
    <section id="about" className="border-b border-border bg-bg-elevated/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:px-10">
        <Reveal>
          <GrowthMark className="mx-auto w-full max-w-xs md:max-w-sm" />
        </Reveal>

        <div>
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              About
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-4 text-balance font-heading text-3xl font-medium leading-tight text-fg sm:text-4xl">
              5+ years turning raw data into decisions — now building
              the pipelines that feed them.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-6 space-y-4 text-balance leading-relaxed text-fg-muted">
              <p>
                I&apos;ve spent the last 5+ years as a data analyst
                at EY and PwC, working across Alteryx, Power BI, Excel, and
                SQL to turn client data into decisions that hold up under
                scrutiny.
              </p>
              <p>
                I&apos;m now deliberately moving upstream — into data
                engineering — with Python, PySpark, and Databricks, and
                hands-on portfolio projects built on Azure Functions, Event
                Grid, and ADLS Gen2 medallion architecture. The goal isn&apos;t
                to leave analysis behind, but to build the systems that make
                good analysis possible in the first place.
              </p>
              <p>
                Outside of the day job, I freelance under{" "}
                <span className="font-mono text-accent">@thinkwithjomin</span>
                , building data visualizations, apps, and websites for small
                businesses and founders.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 border-t border-border pt-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
                Education
              </p>
              <ul className="relative mt-6 space-y-6 border-l border-border pl-6">
                {education.map((e) => (
                  <li key={e.degree} className="group relative">
                    <span
                      className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg-elevated transition-colors group-hover:bg-accent"
                    />
                    <span className="font-heading text-xl text-fg">
                      {e.degree}
                    </span>
                    <div className="mt-1 font-mono text-xs uppercase tracking-wider text-fg-muted">
                      {e.school}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
