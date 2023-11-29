
import React from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Project from './components/Project';
import Skills from './components/Skills';

import './App.css';

function App() {
  return (
    <>
      <Hero />   
       
      <h3 className='titleSection'>Projects.</h3>
      <div className="projects-container">
      <Project 
          title="Proyecto 1" 
          description="Lorem ipsum" 
          imageUrl="https://s3-alpha.figma.com/hub/file/1000675785/resized/800x480/bd16a01f-192f-43b0-899c-4d72c8acacec-cover.png" 
          demoUrl="https://demo1.com" 
          githubRepo="https://www.youtube.com/watch?v=ssEiM3zyN08&ab_channel=TahmidAhmed" />
        <Project
          title="Proyecto 2" 
          description="Lorem ipsum" 
          imageUrl="https://s3-alpha.figma.com/hub/file/1000675785/resized/800x480/bd16a01f-192f-43b0-899c-4d72c8acacec-cover.png" 
          demoUrl="https://demo1.com" 
          githubRepo="https://www.youtube.com/watch?v=ssEiM3zyN08&ab_channel=TahmidAhmed" />       
     
      </div> 

      <Footer />
    </>
  );
}

export default App;
