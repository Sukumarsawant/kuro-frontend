import React from 'react';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <Footer />
    </div>
  );
}

export default App;