'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Mail } from 'lucide-react';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vipul-junghare-1a4791202/',
  },
  {
    label: 'Email',
    href: 'mailto:vipuljunghare05@gmail.com',
  },
];

export default function Hero() {
  return (
    <section id="hero" className="relative px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top,_rgba(168,102,44,0.09),_transparent_50%)]" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber-700">
            Data Engineer | Big Data & Analytics
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-amber-700">Vipul Junghare.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
            I build reliable data pipelines, real-time streaming systems, and analytics solutions that transform raw data into actionable business insights.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--button)] px-5 py-3 text-sm font-medium text-[var(--button-text)] transition-colors hover:opacity-90"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/Vipul_Junghare_Data_Engineer_Resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--border-strong)]"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--border-strong)]"
              >
                {item.label === 'Email' ? <Mail className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
