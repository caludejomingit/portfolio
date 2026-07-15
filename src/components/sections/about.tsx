import { Reveal } from "@/components/motion/reveal";
import { GrowthMark } from "@/components/illustrations/growth-mark";

const education = [
  {
    degree: "MCA, Data Science — Distinction",
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
              Three-plus years turning raw data into decisions — now building
              the pipelines that feed them.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-6 space-y-4 text-balance leading-relaxed text-fg-muted">
              <p>
                I&apos;ve spent the last three-plus years as a data analyst
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
              <ul className="mt-4 space-y-4">
                {education.map((e) => (
                  <li
                    key={e.degree}
                    className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3"
                  >
                    <span className="font-heading text-lg text-fg">
                      {e.degree}
                    </span>
                    <span className="font-mono text-xs text-fg-muted">
                      {e.school}
                    </span>
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
