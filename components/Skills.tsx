'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const skillGroups = [
  {
    title: 'Programming',
    items: ['Python', 'SQL'],
  },
  {
    title: 'Data Engineering',
    items: ['ETL / ELT', 'Apache Spark', 'PySpark', 'Kafka'],
  },
  {
    title: 'Databases & Warehousing',
    items: ['PostgreSQL', 'BigQuery', 'StarRocks', 'Data Warehousing'],
  },
  {
    title: 'Cloud',
    items: ['GCP', 'AWS'],
  },
  {
    title: 'Analytics & Processing',
    items: ['Data Pipelines', 'Data Quality', 'Streaming Analytics', 'Real-time Processing'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Technical"
          highlight="Skills"
          description="A practical toolkit for modern data engineering work, built around reliable pipelines, cloud infrastructure, and analytics-grade data quality."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-5 shadow-[var(--shadow)]"
            >
              <h3 className="text-lg font-semibold text-[var(--foreground)]">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[var(--border)] bg-[var(--panel-alt)] px-3 py-1.5 text-sm text-[var(--foreground)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
