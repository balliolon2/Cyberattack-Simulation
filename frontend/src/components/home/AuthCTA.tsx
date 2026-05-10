import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

export const AuthCTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-dark" />
      
      {/* Glowing background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Shield className="h-16 w-16 text-accent mx-auto mb-8" />
        <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">
          Ready to Start Your Training?
        </h2>
        <p className="text-lg text-slate-400 mb-10">
          Join the platform today to access interactive scenarios, personalized AI feedback, and comprehensive skill tracking aligned with industry standards.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            to="/login"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-base font-medium rounded-md text-slate-200 bg-primary/50 hover:bg-primary-light backdrop-blur-sm transition-colors duration-200"
          >
            Log In to Account
          </Link>
          <Link
            to="/register"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-dark bg-accent hover:bg-accent-light shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] transition-all duration-200"
          >
            Create Free Account
          </Link>
        </div>

        <div className="mt-12 flex justify-center space-x-6 text-sm text-slate-500">
          <span className="flex items-center">
            <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full mr-2"></span>
            University Project
          </span>
          <span className="flex items-center">
            <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full mr-2"></span>
            No data stored externally
          </span>
          <span className="flex items-center">
            <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full mr-2"></span>
            CompTIA-aligned
          </span>
        </div>
      </div>
    </section>
  );
};
