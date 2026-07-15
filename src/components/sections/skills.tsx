"use client";

import { motion } from "motion/react";
import { skillGroups } from "@/lib/data";
import { Reveal } from "@/components/motion/reveal";
import { Blob } from "@/components/illustrations/blob";

const columnOffset = ["md:mt-0", "md:mt-10", "md:mt-4"];

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden border-b border-border">
      <Blob
        variant={3}
        className="pointer-events-none absolute -right-32 -top-24 h-80 w-80 text-sage/10 dark:text-sage/[0.07]"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-10">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Skills
          </span>
          <h2 className="mt-4 max-w-xl text-balance font-heading text-3xl font-medium leading-tight text-fg sm:text-4xl">
            A toolkit spanning data, product, and design.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {skillGroups.map((group, gi) => (
            <div key={group.label} className={columnOffset[gi]}>
              <Reveal delay={gi * 0.1}>
                <h3 className="font-heading text-xl italic text-fg-muted">
                  {group.label}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        duration: 0.4,
                        delay: gi * 0.1 + si * 0.04,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      whileHover={{ y: -2 }}
                      className="cursor-default rounded-full border border-border bg-card px-4 py-2 font-mono text-xs text-fg transition-colors hover:border-accent hover:text-accent"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
