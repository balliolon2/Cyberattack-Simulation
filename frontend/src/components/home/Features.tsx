import React from 'react';
import { Target, Bot, BarChart3, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Scenario-Based Training',
    description: 'Practice real-world attacks mapped to MITRE ATT&CK framework in a dynamic environment.',
    icon: Target,
  },
  {
    name: 'AI-Powered Feedback',
    description: 'Get instant, theory-backed guidance using RAG technology to understand your mistakes.',
    icon: Bot,
  },
  {
    name: 'Skill Gap Analytics',
    description: 'Track your progress across CompTIA Security+ 701 domains with detailed dashboards.',
    icon: BarChart3,
  },
  {
    name: 'Safe Learning Environment',
    description: 'Train without risk to production systems. Safe, sandboxed, and realistic.',
    icon: ShieldCheck,
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-primary relative overflow-hidden border-t border-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-tight">
            Everything you need to <span className="text-accent">level up</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            A comprehensive platform designed to bridge the gap between theoretical knowledge and practical SOC skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-primary-light/30 border border-primary-light rounded-2xl p-6 hover:bg-primary-light/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.15)]"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="h-6 w-6 text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-slate-200 mb-3">
                {feature.name}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
