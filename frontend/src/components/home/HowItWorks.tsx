import React from 'react';
import { ClipboardCheck, PlayCircle, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: 1,
    name: 'Take Pre-Assessment',
    description: 'Evaluate your baseline knowledge to identify areas for improvement.',
    icon: ClipboardCheck,
  },
  {
    id: 2,
    name: 'Train in Scenarios',
    description: 'Engage with simulated cyberattacks and receive AI-guided feedback.',
    icon: PlayCircle,
  },
  {
    id: 3,
    name: 'Measure Improvement',
    description: 'Review your post-assessment results and track your skill growth.',
    icon: TrendingUp,
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-primary-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-tight">
            How It <span className="text-emerald-400">Works</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            A proven three-step methodology to transform theoretical knowledge into practical expertise.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-primary-light" aria-hidden="true" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative text-center"
              >
                <div className="flex justify-center mb-6 relative z-10">
                  <div className="h-24 w-24 rounded-full bg-primary border-4 border-primary-light flex items-center justify-center relative">
                    <step.icon className="h-10 w-10 text-emerald-400" />
                    <div className="absolute -bottom-3 -right-3 h-8 w-8 rounded-full bg-accent text-primary-dark font-bold flex items-center justify-center text-sm">
                      {step.id}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-200 mb-3">{step.name}</h3>
                <p className="text-slate-400 max-w-xs mx-auto">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
