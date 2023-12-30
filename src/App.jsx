// App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ProjectList from './components/ProjectsList';
import './App.css';

function App() {
  return (
    <>
      <Header/>     
      <Hero />
      <About/>
      <Skills />
      <ProjectList/>
      
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
