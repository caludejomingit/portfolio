"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/motion/reveal";
import { links } from "@/lib/data";

const directLinks = [
  { label: "Email", value: links.email, href: `mailto:${links.email}` },
  { label: "LinkedIn", value: "in/jomingeorgeattayil", href: links.linkedin },
  { label: "GitHub", value: "@caludejomingit", href: links.github },
  { label: "Instagram", value: "@thinkwithjomin", href: links.instagram },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name || "Anonymous"}${email ? ` (${email})` : ""}`
    );
    window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="border-b border-border bg-bg-elevated/40">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-2 md:gap-10 md:px-10">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Contact
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-medium leading-tight text-fg sm:text-4xl">
            Have a project in mind? Let&apos;s talk.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-fg-muted">
            Whether it&apos;s a data pipeline, a mobile app, or a website that
            needs to convert — send a note and I&apos;ll get back to you.
          </p>

          <ul className="mt-10 space-y-3">
            {directLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-baseline gap-3 border-b border-border py-2 transition-colors hover:border-accent"
                >
                  <span className="font-mono text-xs uppercase tracking-wider text-fg-muted">
                    {link.label}
                  </span>
                  <span className="font-heading text-lg text-fg transition-colors group-hover:text-accent">
                    {link.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-fg-muted">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-lg border border-border bg-bg px-4 py-3 text-sm text-fg outline-none transition-colors focus:border-accent"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-fg-muted">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border border-border bg-bg px-4 py-3 text-sm text-fg outline-none transition-colors focus:border-accent"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-fg-muted">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="resize-none rounded-lg border border-border bg-bg px-4 py-3 text-sm text-fg outline-none transition-colors focus:border-accent"
                placeholder="Tell me a bit about the project..."
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-sm text-cream transition-transform hover:scale-[1.02] hover:bg-accent-hover"
            >
              Send Message
              <span aria-hidden="true">→</span>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
