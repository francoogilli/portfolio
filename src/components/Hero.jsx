// src/components/Hero.jsx
import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <span className="title">Full Stack Web Developer</span>
        <h1>Hello, I'm <span>Franco</span></h1>
        <p>
          I love meeting new people and learning about their lives and their backgrounds.
          I can almost always find common ground with strangers, and I like making people feel comfortable in my presence.
        </p>
        <div className="button-container">
          <Button text="About Me" svgPath="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z" />
          <Button text="View Works" secondary />
        </div>
      </div>
    </div>
  );
};

export default Hero;
