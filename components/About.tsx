'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const strengths = [
  'ETL and ELT pipeline development',
  'Data validation and quality checks',
  'Real-time and batch processing workflows',
  'Data warehousing and reporting support',
  'Cloud-based analytics infrastructure',
];

export default function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="About"
          highlight="Me"
          description="I design and build data systems that help teams move from raw information to trusted business decisions. My work focuses on reliable pipelines, scalable analytics infrastructure, and practical engineering decisions that support real outcomes."
        />

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-7 shadow-[var(--shadow)]"
          >
            <p className="text-lg leading-8 text-[var(--foreground)]">
              I am a Data Engineer with a practical focus on building scalable data pipelines,
              processing large datasets, and supporting analytics teams with cleaner, faster, more
              reliable data. My work involves SQL, ETL/ELT processes, distributed processing,
              warehousing, and data quality checks across modern analytics stacks.
            </p>

            <div className="mt-8 space-y-3">
              {strengths.map((item) => (
                <div key={item} className="rounded-2xl border border-[var(--border)] bg-[var(--panel-alt)] px-4 py-3 text-sm text-[var(--foreground)]">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5"
          >
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--muted)]">Education</p>
              <p className="mt-4 text-base leading-7 text-[var(--foreground)]">
                PG-Diploma in Big Data Analytics from CDAC ACTS, with a focus on distributed data
                processing and analytics platforms.
              </p>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--muted)]">Core stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Python', 'SQL', 'PySpark', 'Kafka', 'GCP', 'AWS'].map((item) => (
                  <span key={item} className="rounded-full border border-[var(--border)] bg-[var(--panel-alt)] px-3 py-1.5 text-sm text-[var(--foreground)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
