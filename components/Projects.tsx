'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const projects = [
  {
    title: 'Real-Time Food Delivery Analytics Platform',
    problem:
      'Operational teams needed near real-time visibility into orders, delivery flow, and service performance.',
    contribution:
      'Built the streaming ingestion and transformation layer using Kafka and PySpark Structured Streaming, then shaped the data for analytics dashboards and downstream business metrics.',
    stack: ['Kafka', 'PySpark Structured Streaming', 'dbt', 'BigQuery', 'FastAPI', 'Next.js'],
    highlights: [
      'Event-driven analytics pipeline started from raw delivery events.',
      'Data was cleaned and modeled for dashboard-ready reporting.',
      'Architecture supported fast monitoring of operational KPIs.',
    ],
  },
  {
    title: 'Real-Time Dashboard Analytics / KPI Infrastructure',
    problem:
      'The reporting layer needed fresh business metrics with low latency and consistent warehouse data.',
    contribution:
      'Worked with streaming data pipelines and CDC-oriented patterns to support real-time KPI infrastructure and data freshness for reporting and decision-making.',
    stack: ['Streaming Pipelines', 'CDC', 'StarRocks', 'Real-time Analytics'],
    highlights: [
      'Focused on reliable ingestion and update patterns for KPI surfaces.',
      'Improved data freshness for timely operational monitoring.',
      'Designed around warehouse performance and reporting usability.',
    ],
  },
  {
    title: 'Chest Disease Detection System',
    problem:
      'The goal was to support medical image analysis with a machine-learning workflow that could classify chest-related disease patterns.',
    contribution:
      'Developed the model pipeline and application flow using a CNN-based approach, along with a FastAPI backend and a web interface for interaction.',
    stack: ['Python', 'PyTorch', 'CNN', 'FastAPI', 'React', 'Docker'],
    highlights: [
      'Applied deep learning for image-based classification tasks.',
      'Built an end-to-end workflow from model inference to API-driven access.',
      'Used containerization to improve deployment portability.',
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Featured"
          highlight="Projects"
          description="Selected work across streaming analytics, data infrastructure, and applied machine learning, with a focus on real engineering decisions rather than surface-level demos."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-5 shadow-[var(--shadow)]"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium uppercase tracking-[0.18em] text-amber-700">
                  Project {index + 1}
                </span>
              </div>

              <h3 className="text-2xl font-semibold leading-tight text-[var(--foreground)]">{project.title}</h3>

              <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--muted)]">
                <div>
                  <p className="font-medium text-[var(--foreground)]">Problem</p>
                  <p className="mt-1">{project.problem}</p>
                </div>

                <div>
                  <p className="font-medium text-[var(--foreground)]">Contribution</p>
                  <p className="mt-1">{project.contribution}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-[var(--border)] bg-[var(--panel-alt)] px-2.5 py-1 text-xs font-medium text-[var(--foreground)]">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 space-y-2 text-sm text-[var(--foreground)]">
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-700" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
