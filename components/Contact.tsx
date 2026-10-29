'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import SectionHeader from './SectionHeader';

const contacts = [
  {
    label: 'Email',
    value: 'vipuljunghare05@gmail.com',
    href: 'mailto:vipuljunghare05@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/vipul-junghare-1a4791202',
    href: 'https://www.linkedin.com/in/vipul-junghare-1a4791202/',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Contact"
          highlight="Me"
          description="Open to data engineering opportunities, collaborations, and conversations around analytics infrastructure and pipeline design."
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6 shadow-[var(--shadow)] sm:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--panel-alt)] p-4 text-left transition-colors hover:border-[var(--border-strong)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--panel)] text-amber-700">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">{item.label}</p>
                    <p className="mt-1 text-sm text-[var(--foreground)]">{item.value}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-[var(--muted)]" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
