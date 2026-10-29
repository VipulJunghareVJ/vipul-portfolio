'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import SectionHeader from './SectionHeader';

const responsibilities = [
  'Built and maintained ETL pipelines for data movement, transformation, and delivery across analytics workflows.',
  'Worked with PostgreSQL and SQL to support data validation, reporting readiness, and business-facing data access.',
  'Contributed to reporting and dashboard data preparation by simplifying data structures and improving data consistency.',
  'Supported data quality checks to reduce defects and improve confidence in downstream analytics.',
  'Applied practical data engineering methods to keep pipelines reliable, readable, and aligned with business needs.',
];

export default function Experience() {
  return (
    <section id="experience" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Professional"
          highlight="Experience"
          description="My current work centers on building dependable data systems, improving data quality, and enabling reporting and analytics through structured engineering practices."
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6 shadow-[var(--shadow)] sm:p-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--panel-alt)] text-amber-700">
                <Briefcase className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-amber-700">Data Engineer</p>
                <h3 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">Ishan Technologies</h3>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel-alt)] px-3 py-2 text-sm text-[var(--muted)]">
              <Calendar className="h-4 w-4 text-amber-700" />
              Current role
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {responsibilities.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-[var(--border)] bg-[var(--panel-alt)] px-4 py-3 text-[var(--foreground)]">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-700" />
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
