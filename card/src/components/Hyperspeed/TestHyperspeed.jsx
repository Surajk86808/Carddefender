import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const TestHyperspeed = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    console.log('TestHyperspeed: Starting initialization');
    
    if (!containerRef.current) {
      console.error('TestHyperspeed: Container not found');
      return;
    }

    try {
      // Create scene
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0d0d0d);

      // Create camera
      const camera = new THREE.PerspectiveCamera(
        75,
        containerRef.current.offsetWidth / containerRef.current.offsetHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      // Create renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      containerRef.current.appendChild(renderer.domElement);

      // Create some moving particles to simulate hyperspeed
      const geometry = new THREE.BufferGeometry();
      const particleCount = 1000;
      const positions = new Float32Array(particleCount * 3);
      const velocities = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 100;     // x
        positions[i + 1] = (Math.random() - 0.5) * 100; // y
        positions[i + 2] = (Math.random() - 0.5) * 100; // z
        
        velocities[i] = 0;     // x velocity
        velocities[i + 1] = 0; // y velocity
        velocities[i + 2] = Math.random() * 2 + 1; // z velocity (towards camera)
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      const material = new THREE.PointsMaterial({
        color: 0x3b82f6,
        size: 2,
        transparent: true,
        opacity: 0.8
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      sceneRef.current = { scene, camera, renderer, particles, velocities };

      console.log('TestHyperspeed: Scene created successfully');

      // Animation loop
      const animate = () => {
        if (!sceneRef.current) return;

        const { scene, camera, renderer, particles, velocities } = sceneRef.current;
        
        // Update particle positions
        const positions = particles.geometry.attributes.position.array;
        
        for (let i = 0; i < particleCount * 3; i += 3) {
          positions[i + 2] += velocities[i + 2]; // Move towards camera
          
          // Reset particle if it's too close
          if (positions[i + 2] > 50) {
            positions[i] = (Math.random() - 0.5) * 100;
            positions[i + 1] = (Math.random() - 0.5) * 100;
            positions[i + 2] = -50;
          }
        }
        
        particles.geometry.attributes.position.needsUpdate = true;
        
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };

      animate();
      console.log('TestHyperspeed: Animation started');

    } catch (error) {
      console.error('TestHyperspeed: Error during initialization:', error);
    }

    // Cleanup
    return () => {
      console.log('TestHyperspeed: Cleaning up');
      if (sceneRef.current) {
        const { renderer } = sceneRef.current;
        if (containerRef.current && renderer.domElement) {
          containerRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
        sceneRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default TestHyperspeed;