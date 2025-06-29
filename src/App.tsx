import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Content from './components/Content';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarField from './components/StarField';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white relative overflow-x-hidden">
      <StarField />
      <Hero />
      <Skills />
      <Projects />
      <Services />
      <Content />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;