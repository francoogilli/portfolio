// src/App.jsx
import React from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Project from './components/Project';
import './App.css'; // Import your main CSS file

function App() {
  return (
    <>
      <Hero />
      
      <h3 className='titleSection'>Projects.</h3>
      <div className="projects-container">
        <Project 
          title="Proyecto 1" 
          description="Lorem ipsum" 
          imageUrl="https://s3-alpha.figma.com/hub/file/4097734379/9ad0c805-993a-4507-8b02-fcec788ae9c8-cover.png" 
          demoUrl="https://demo1.com" 
          githubUrl="https://www.youtube.com/watch?v=ssEiM3zyN08&ab_channel=TahmidAhmed" />
        <Project
          title="Proyecto 2" 
          description="Lorem ipsum" 
          imageUrl="https://s3-alpha.figma.com/hub/file/2348149510/29ffca08-1e2c-48c8-ae95-11e32fbd0b7d-cover.png" 
          demoUrl="https://demo1.com" 
          githubUrl="https://www.youtube.com/watch?v=ssEiM3zyN08&ab_channel=TahmidAhmed" />       
      </div> 
      
      <Footer />
    </>
  );
}

export default App;
