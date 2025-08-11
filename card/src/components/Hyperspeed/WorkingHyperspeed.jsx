import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const WorkingHyperspeed = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    console.log('WorkingHyperspeed: Starting initialization');
    
    if (!containerRef.current) {
      console.error('WorkingHyperspeed: Container not found');
      return;
    }

    let scene, camera, renderer, particles, lines;

    const init = () => {
      try {
        // Scene setup
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0d0d0d);
        scene.fog = new THREE.Fog(0x0d0d0d, 50, 2000);

        // Camera setup
        const width = containerRef.current.offsetWidth || window.innerWidth;
        const height = containerRef.current.offsetHeight || window.innerHeight;
        
        camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 2000);
        camera.position.set(0, 0, 100);

        // Renderer setup
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        containerRef.current.appendChild(renderer.domElement);

        // Create tunnel effect with lines
        createTunnel();
        
        // Create moving particles
        createParticles();

        console.log('WorkingHyperspeed: Scene initialized successfully');
        animate();

      } catch (error) {
        console.error('WorkingHyperspeed: Initialization error:', error);
      }
    };

    const createTunnel = () => {
      const tunnelGeometry = new THREE.BufferGeometry();
      const tunnelMaterial = new THREE.LineBasicMaterial({ 
        color: 0x3b82f6, 
        transparent: true, 
        opacity: 0.6 
      });

      const points = [];
      const segments = 100;
      const radius = 50;

      // Create tunnel rings
      for (let i = 0; i < segments; i++) {
        const z = -i * 20;
        const ringPoints = 20;
        
        for (let j = 0; j < ringPoints; j++) {
          const angle = (j / ringPoints) * Math.PI * 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          points.push(new THREE.Vector3(x, y, z));
          
          // Connect to next point in ring
          if (j < ringPoints - 1) {
            points.push(new THREE.Vector3(
              Math.cos(((j + 1) / ringPoints) * Math.PI * 2) * radius,
              Math.sin(((j + 1) / ringPoints) * Math.PI * 2) * radius,
              z
            ));
          } else {
            // Connect last point to first
            points.push(new THREE.Vector3(
              Math.cos(0) * radius,
              Math.sin(0) * radius,
              z
            ));
          }
        }
      }

      tunnelGeometry.setFromPoints(points);
      lines = new THREE.LineSegments(tunnelGeometry, tunnelMaterial);
      scene.add(lines);
    };

    const createParticles = () => {
      const particleGeometry = new THREE.BufferGeometry();
      const particleCount = 2000;
      const positions = new Float32Array(particleCount * 3);
      const velocities = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i += 3) {
        // Random position in tunnel
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 45;
        positions[i] = Math.cos(angle) * radius;     // x
        positions[i + 1] = Math.sin(angle) * radius; // y
        positions[i + 2] = -Math.random() * 2000;    // z

        velocities[i] = 0;     // x velocity
        velocities[i + 1] = 0; // y velocity
        velocities[i + 2] = Math.random() * 5 + 2; // z velocity (towards camera)
      }

      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      const particleMaterial = new THREE.PointsMaterial({
        color: 0x3b82f6,
        size: 3,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
      });

      particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);

      // Store velocities for animation
      particles.userData = { velocities };
    };

    const animate = () => {
      if (!scene || !camera || !renderer) return;

      animationRef.current = requestAnimationFrame(animate);

      // Move tunnel
      if (lines) {
        lines.position.z += 2;
        if (lines.position.z > 100) {
          lines.position.z = 0;
        }
      }

      // Move particles
      if (particles) {
        const positions = particles.geometry.attributes.position.array;
        const velocities = particles.userData.velocities;
        
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 2] += velocities[i + 2]; // Move towards camera
          
          // Reset particle if it's too close
          if (positions[i + 2] > 100) {
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * 45;
            positions[i] = Math.cos(angle) * radius;
            positions[i + 1] = Math.sin(angle) * radius;
            positions[i + 2] = -2000;
          }
        }
        
        particles.geometry.attributes.position.needsUpdate = true;
      }

      // Add some camera movement
      const time = Date.now() * 0.001;
      camera.position.x = Math.sin(time * 0.1) * 5;
      camera.position.y = Math.cos(time * 0.1) * 5;

      renderer.render(scene, camera);
    };

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer || !containerRef.current) return;
      
      const width = containerRef.current.offsetWidth || window.innerWidth;
      const height = containerRef.current.offsetHeight || window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Initialize after a short delay to ensure container is ready
    setTimeout(init, 100);

    // Cleanup
    return () => {
      console.log('WorkingHyperspeed: Cleaning up');
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      window.removeEventListener('resize', handleResize);
      
      if (renderer && containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
        renderer.dispose();
      }
      
      if (scene) {
        scene.clear();
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

export default WorkingHyperspeed;