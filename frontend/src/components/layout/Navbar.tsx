import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Menu, X, LogOut } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useAuthStore } from '../../store/authStore';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuthStore();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 bg-primary/90 backdrop-blur-md border-b border-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold text-slate-100">SOC Trainer</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-300 hover:text-accent transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-slate-300 hover:text-accent transition-colors">
              How it Works
            </a>
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <span className="text-slate-300 font-medium">Welcome, {user?.name}</span>
                  <button
                    onClick={logout}
                    className="flex items-center text-slate-300 hover:text-error transition-colors"
                  >
                    <LogOut className="h-5 w-5 mr-1" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-slate-300 hover:text-accent font-medium transition-colors"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/register"
                    className="bg-accent hover:bg-accent-light text-primary-dark font-semibold px-4 py-2 rounded-md transition-colors"
                  >
                    Create Account
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-primary-dark border-b border-primary-light">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#features"
              className="block px-3 py-2 text-slate-300 hover:text-accent hover:bg-primary rounded-md"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block px-3 py-2 text-slate-300 hover:text-accent hover:bg-primary rounded-md"
              onClick={toggleMenu}
            >
              How it Works
            </a>
            {isAuthenticated ? (
              <button
                onClick={() => { logout(); toggleMenu(); }}
                className="w-full text-left block px-3 py-2 text-error hover:bg-primary rounded-md"
              >
                Logout ({user?.name})
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-slate-300 hover:text-accent hover:bg-primary rounded-md"
                  onClick={toggleMenu}
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 text-accent font-medium hover:bg-primary rounded-md"
                  onClick={toggleMenu}
                >
                  Create Account
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
