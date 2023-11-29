import React, { useEffect } from 'react';
import * as THREE from 'three';

const StarsBackground = () => {
  useEffect(() => {
    // Set up camera
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 700);
    camera.position.z = 50;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('space').appendChild(renderer.domElement);

    // Set up Three.js scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x161513);

    // Create particle geometry and material
    const particleGeometry = new THREE.BufferGeometry();
    const particleMaterial = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 0.1 });

    // Create an array to hold particle positions
    const particles = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      particles.push(x, y, z);
    }

    // Add the particle positions to the geometry
    particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(particles, 3));

    // Create particle system
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      particleSystem.rotation.x += 0.0001;
      particleSystem.rotation.y += 0.0001;
      renderer.render(scene, camera);
    };

    // Start the animation loop
    animate();

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      document.getElementById('space').removeChild(renderer.domElement);
    };
  }, []);

  return <div id="space" style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}></div>;
};

export default StarsBackground;
