import React from 'react';
import { Shield, Code, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary border-t border-primary-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-accent" />
              <span className="text-lg font-bold text-slate-100">SOC Trainer</span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm mb-4">
              Automated Data-Driven Cyberattack Simulation for Blue Team Training. 
              A university senior project aligned with CompTIA Security+ 701.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-accent transition-colors">
                <Code className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-slate-400 hover:text-accent">Documentation</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-accent">MITRE ATT&CK</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-accent">CompTIA Sec+ 701</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-slate-400 hover:text-accent">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-accent">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-light flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Kasetsart University Senior Project. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 mt-2 md:mt-0">
            Not for production use. Educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};
