'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  highlight: string;
  description?: string;
}

export default function SectionHeader({
  title,
  highlight,
  description,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      className="mb-10 max-w-3xl"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-12 bg-[var(--border-strong)]" />
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-amber-700">Section</p>
      </div>
      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-4xl">
        {title}{' '}
        <span className="text-amber-700">{highlight}</span>
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">{description}</p>
      ) : null}
    </motion.div>
  );
}
