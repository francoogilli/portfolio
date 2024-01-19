import React from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <><div className="bg-[#1d1f31] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
    <div className="bg-[#181c26] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>
      <Navbar/>
      <Intro/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
      
    </>
  );
}

export default App;
