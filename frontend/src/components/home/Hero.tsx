import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background grid animation */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[40rem] h-[40rem] bg-accent/20 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center space-x-2 bg-primary-light/50 border border-primary-light px-3 py-1 rounded-full mb-8 backdrop-blur-sm">
            <Terminal className="h-4 w-4 text-accent" />
            <span className="text-sm text-slate-300 font-mono">CompTIA Security+ 701 Aligned</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-100 mb-6">
            Master SOC Analyst Skills Through <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
              Realistic Cyberattack Simulations
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-lg md:text-xl text-slate-400 mx-auto mb-10">
            Practice detection, analysis, and response in a safe, AI-powered training environment designed for aspiring security professionals.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/register"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-dark bg-accent hover:bg-accent-light transition-colors duration-200"
            >
              Get Started Free
              <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
            </Link>
            <button
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-base font-medium rounded-md text-slate-300 hover:text-white hover:border-slate-500 hover:bg-primary-light transition-colors duration-200"
            >
              View Features
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
