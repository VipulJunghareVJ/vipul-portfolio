'use client';

import { motion } from 'framer-motion';
import { Download, Eye, FileText } from 'lucide-react';
import SectionHeader from './SectionHeader';

const resumeHighlights = [
  'ETL and ELT pipeline development',
  'SQL and PostgreSQL-based data workflows',
  'PySpark and distributed processing',
  'Data validation and warehouse readiness',
  'Cloud and analytics platform fundamentals',
  'Real-time and batch data processing',
];

export default function Resume() {
  return (
    <section id="resume" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Resume"
          highlight="PDF"
          description="A concise summary of my data engineering strengths, project experience, and professional focus."
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6 shadow-[var(--shadow)] sm:p-8"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--panel-alt)] px-4 py-2 text-sm font-medium text-[var(--foreground)]">
                <FileText className="h-4 w-4 text-amber-700" />
                Resume
              </div>
              <div>
                <h3 className="text-3xl font-semibold tracking-tight text-[var(--foreground)]">Data Engineer</h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-[var(--muted)]">
                  Strong focus on data pipeline reliability, analytics infrastructure, ETL/ELT design,
                  and data systems that support smarter business decisions.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/Vipul_Junghare_Data_Engineer_Resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--button)] px-5 py-3 text-sm font-medium text-[var(--button-text)] transition-colors hover:opacity-90"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href="/Vipul_Junghare_Data_Engineer_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--border-strong)]"
              >
                <Eye className="h-4 w-4" />
                View Resume
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {resumeHighlights.map((item) => (
              <div key={item} className="rounded-2xl border border-[var(--border)] bg-[var(--panel-alt)] px-4 py-3 text-sm text-[var(--foreground)]">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
