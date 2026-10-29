'use client';

import { motion } from 'framer-motion';
import { Award, BookOpen, Code, Zap } from 'lucide-react';
import SectionHeader from './SectionHeader';

const achievements = [
  {
    icon: Award,
    title: 'PG-DBDA Certification',
    description: 'Completed PG-Diploma in Big Data Analytics at CDAC ACTS.',
    accent: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Code,
    title: 'Data Engineering Internship',
    description: 'Hands-on data engineering experience at Ishan Technologies.',
    accent: 'from-purple-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Technical Projects',
    description: 'Delivered projects in ETL, PySpark, and IoT data flows.',
    accent: 'from-orange-500 to-red-500',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Active learner in data warehousing, cloud platforms, and big data.',
    accent: 'from-green-500 to-emerald-500',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="bg-slate-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Achievements"
          highlight="& Impact"
          description="Professional milestones and certifications that demonstrate my readiness for data engineering roles in enterprise and product teams."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[32px] border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl"
              >
                <div className={`mb-6 inline-flex rounded-3xl bg-gradient-to-r ${item.accent} px-4 py-3 text-white shadow-lg shadow-slate-950/20`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-slate-400 leading-7">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-6 sm:grid-cols-3"
        >
          {[
            { metric: '20+', label: 'Skills mastered' },
            { metric: '4+', label: 'Projects delivered' },
            { metric: '6+', label: 'Months experience' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-[32px] border border-slate-800 bg-slate-900/80 p-8 text-center shadow-xl shadow-slate-950/10 backdrop-blur-xl">
              <p className="text-5xl font-semibold text-white">{stat.metric}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.25em] text-slate-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
