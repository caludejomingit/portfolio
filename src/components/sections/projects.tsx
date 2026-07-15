"use client";

import { motion } from "motion/react";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/motion/reveal";
import { GoldlockerArt } from "@/components/illustrations/projects/goldlocker";
import { NilavaraArt } from "@/components/illustrations/projects/nilavara";
import { OrmaArt } from "@/components/illustrations/projects/orma";
import { PanamoArt } from "@/components/illustrations/projects/panamo";
import { CarmeliaArt } from "@/components/illustrations/projects/carmelia";
import { PipelineArt } from "@/components/illustrations/projects/pipeline";

const artMap = {
  goldlocker: GoldlockerArt,
  nilavara: NilavaraArt,
  orma: OrmaArt,
  panamo: PanamoArt,
  carmelia: CarmeliaArt,
  pipeline: PipelineArt,
};

export function Projects() {
  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Featured Work
          </span>
          <h2 className="mt-4 max-w-xl text-balance font-heading text-3xl font-medium leading-tight text-fg sm:text-4xl">
            Products shipped, and systems in progress.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const Art = artMap[project.illustration];
            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: (i % 3) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-bg">
                  <Art className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]" />
                  {project.category === "data-engineering" && (
                    <span className="absolute left-4 top-4 rounded-full bg-forest px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-cream">
                      Data Engineering
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl text-fg">
                    {project.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-accent">
                    {project.tagline}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-fg-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
