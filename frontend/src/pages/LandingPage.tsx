import React from 'react';
import { Hero } from '../components/home/Hero';
import { Features } from '../components/home/Features';
import { HowItWorks } from '../components/home/HowItWorks';
import { AuthCTA } from '../components/home/AuthCTA';

export const LandingPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <AuthCTA />
    </>
  );
};
