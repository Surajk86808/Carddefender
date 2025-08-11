import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnalyticsBackground = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    console.log('AnalyticsBackground: Starting initialization');
    
    if (!containerRef.current) {
      console.error('AnalyticsBackground: Container not found');
      return;
    }

    let scene, camera, renderer, dataPoints, gridLines, waveGeometry, waveMaterial, waveMesh;

    const init = () => {
      try {
        // Scene setup
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0a0f);
        scene.fog = new THREE.Fog(0x0a0a0f, 100, 1000);

        // Camera setup
        const width = containerRef.current.offsetWidth || window.innerWidth;
        const height = containerRef.current.offsetHeight || window.innerHeight;
        
        camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.set(0, 50, 100);
        camera.lookAt(0, 0, 0);

        // Renderer setup
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        containerRef.current.appendChild(renderer.domElement);

        // Create data visualization elements
        createDataGrid();
        createFloatingDataPoints();
        createDataWaves();
        
        console.log('AnalyticsBackground: Scene initialized successfully');
        animate();

      } catch (error) {
        console.error('AnalyticsBackground: Initialization error:', error);
      }
    };

    const createDataGrid = () => {
      const gridGroup = new THREE.Group();
      
      // Create grid lines
      const gridMaterial = new THREE.LineBasicMaterial({ 
        color: 0x1a1a2e, 
        transparent: true, 
        opacity: 0.3 
      });

      // Horizontal lines
      for (let i = -200; i <= 200; i += 20) {
        const geometry = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(-200, 0, i),
          new THREE.Vector3(200, 0, i)
        ]);
        const line = new THREE.Line(geometry, gridMaterial);
        gridGroup.add(line);
      }

      // Vertical lines
      for (let i = -200; i <= 200; i += 20) {
        const geometry = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(i, 0, -200),
          new THREE.Vector3(i, 0, 200)
        ]);
        const line = new THREE.Line(geometry, gridMaterial);
        gridGroup.add(line);
      }

      gridLines = gridGroup;
      scene.add(gridLines);
    };

    const createFloatingDataPoints = () => {
      const pointsGroup = new THREE.Group();
      const pointGeometry = new THREE.SphereGeometry(0.5, 8, 8);
      
      // Create different colored data points representing different metrics
      const colors = [0x3b82f6, 0x10b981, 0xf59e0b, 0xef4444, 0x8b5cf6];
      const pointsData = [];

      for (let i = 0; i < 100; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const material = new THREE.MeshBasicMaterial({ 
          color: color,
          transparent: true,
          opacity: 0.8
        });
        
        const point = new THREE.Mesh(pointGeometry, material);
        
        // Random position
        point.position.set(
          (Math.random() - 0.5) * 300,
          Math.random() * 100 + 10,
          (Math.random() - 0.5) * 300
        );
        
        // Store animation data
        point.userData = {
          originalY: point.position.y,
          speed: Math.random() * 0.02 + 0.01,
          amplitude: Math.random() * 10 + 5
        };
        
        pointsData.push(point);
        pointsGroup.add(point);
      }

      dataPoints = { group: pointsGroup, points: pointsData };
      scene.add(pointsGroup);
    };

    const createDataWaves = () => {
      // Create animated wave representing data flow
      const waveWidth = 200;
      const waveHeight = 200;
      const waveSegments = 50;

      waveGeometry = new THREE.PlaneGeometry(waveWidth, waveHeight, waveSegments, waveSegments);
      
      waveMaterial = new THREE.MeshBasicMaterial({
        color: 0x1e40af,
        transparent: true,
        opacity: 0.2,
        wireframe: true,
        side: THREE.DoubleSide
      });

      waveMesh = new THREE.Mesh(waveGeometry, waveMaterial);
      waveMesh.rotation.x = -Math.PI / 2;
      waveMesh.position.y = -20;
      
      scene.add(waveMesh);
    };

    const animate = () => {
      if (!scene || !camera || !renderer) return;

      animationRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Animate floating data points
      if (dataPoints) {
        dataPoints.points.forEach((point, index) => {
          point.position.y = point.userData.originalY + 
            Math.sin(time * point.userData.speed + index) * point.userData.amplitude;
          
          // Rotate points
          point.rotation.x += 0.01;
          point.rotation.y += 0.01;
        });
      }

      // Animate data wave
      if (waveMesh && waveGeometry) {
        const positions = waveGeometry.attributes.position;
        for (let i = 0; i < positions.count; i++) {
          const x = positions.getX(i);
          const z = positions.getZ(i);
          const y = Math.sin(x * 0.1 + time) * Math.cos(z * 0.1 + time) * 5;
          positions.setY(i, y);
        }
        positions.needsUpdate = true;
      }

      // Rotate grid slightly
      if (gridLines) {
        gridLines.rotation.y += 0.001;
      }

      // Camera movement
      camera.position.x = Math.sin(time * 0.1) * 20;
      camera.position.z = 100 + Math.cos(time * 0.1) * 20;
      camera.lookAt(0, 0, 0);

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

    // Initialize after a short delay
    setTimeout(init, 100);

    // Cleanup
    return () => {
      console.log('AnalyticsBackground: Cleaning up');
      
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
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default AnalyticsBackground;