// App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
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
