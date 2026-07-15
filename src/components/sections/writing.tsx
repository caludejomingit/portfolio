import { Reveal } from "@/components/motion/reveal";
import { BookCover } from "@/components/illustrations/book-cover";
import { links } from "@/lib/data";

export function Writing() {
  return (
    <section id="writing" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Writing
          </span>
          <h2 className="mt-4 max-w-xl text-balance font-heading text-3xl font-medium leading-tight text-fg sm:text-4xl">
            Beyond data — a published novel.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col gap-8 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="mx-auto w-40 shrink-0 sm:mx-0">
              <BookCover className="w-full drop-shadow-lg" />
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-fg-muted">
                Malayalam Crime Thriller · Kindle
              </p>
              <h3 className="mt-2 font-heading text-2xl text-fg sm:text-3xl">
                നിഴൽ കോഡ്
              </h3>
              <p className="font-mono text-sm text-fg-muted">
                (Nizhal Code)
              </p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-fg-muted">
                A crime thriller written and published in Malayalam,
                available on Amazon Kindle. A different kind of
                problem-solving — plot and character instead of pipelines and
                queries.
              </p>
              <a
                href={links.amazonBook}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-sm text-cream transition-transform hover:scale-[1.03] hover:bg-accent-hover"
              >
                Read on Amazon Kindle
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
