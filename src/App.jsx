// App.jsx
import React from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
