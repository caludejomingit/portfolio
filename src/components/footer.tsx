import { links } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="font-heading text-lg text-fg">Jomin George Attayil</p>
          <p className="mt-1 font-mono text-xs text-fg-muted">
            Kerala, India · Available for freelance work
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider text-fg-muted">
          <a href={links.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            LinkedIn
          </a>
          <a href={links.instagram} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            Instagram
          </a>
          <a href={`mailto:${links.email}`} className="hover:text-accent transition-colors">
            Email
          </a>
        </div>
      </div>
      <div className="border-t border-border px-6 py-4 text-center font-mono text-[11px] text-fg-muted md:px-10">
        © {new Date().getFullYear()} Jomin George Attayil. Built with Next.js.
      </div>
    </footer>
  );
}
