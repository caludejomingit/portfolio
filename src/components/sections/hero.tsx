"use client";

import { motion, type Variants } from "motion/react";
import { HeroPipeline } from "@/components/illustrations/hero-pipeline";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-20 md:grid-cols-[1.1fr_0.9fr] md:gap-8 md:px-10 md:pb-24 md:pt-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="order-2 md:order-1"
        >
          <motion.p
            variants={item}
            className="font-mono text-xs uppercase tracking-[0.2em] text-accent"
          >
            Jomin George Attayil
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 text-balance font-heading text-4xl font-medium leading-[1.08] tracking-tight text-fg sm:text-5xl lg:text-[3.4rem]"
          >
            Senior Data Analyst{" "}
            <span className="text-accent">→</span> Data Engineer.
            <br />
            Freelance data{" "}
            <span className="italic font-normal text-fg-muted">&amp;</span> web
            craft.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-fg-muted"
          >
            I turn messy spreadsheets into reliable pipelines, and rough ideas
            into shipped products — three-plus years in analytics at EY and
            PwC, now building data engineering systems on Azure and
            Databricks.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-sm text-cream transition-transform hover:scale-[1.03] hover:bg-accent-hover"
            >
              View Work
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-sm text-fg transition-colors hover:border-accent hover:text-accent"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-10 font-mono text-xs uppercase tracking-widest text-fg-muted"
          >
            @thinkwithjomin · Kerala, India
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="order-1 md:order-2"
        >
          <HeroPipeline className="mx-auto w-full max-w-md md:max-w-none" />
        </motion.div>
      </div>
    </section>
  );
}
