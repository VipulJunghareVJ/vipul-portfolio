'use client';

import { ArrowUp, Mail } from 'lucide-react';

const quickLinks = [
  { label: 'Home', target: 'hero' },
  { label: 'About', target: 'about' },
  { label: 'Experience', target: 'experience' },
  { label: 'Projects', target: 'projects' },
  { label: 'Contact', target: 'contact' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xl font-semibold text-[var(--foreground)]">Vipul Junghare</p>
            <p className="mt-2 text-sm text-[var(--muted)]">Data Engineer | Big Data & Analytics</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {quickLinks.map((link) => (
              <button
                key={link.target}
                type="button"
                onClick={() => {
                  const element = document.getElementById(link.target);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="mailto:vipuljunghare05@gmail.com" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)]">
            <Mail className="h-4 w-4" />
            vipuljunghare05@gmail.com
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-sm text-[var(--foreground)] transition-colors hover:border-[var(--border-strong)]"
          >
            <ArrowUp className="h-4 w-4" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
