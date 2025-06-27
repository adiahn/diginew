import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create network nodes
    const nodes: THREE.Mesh[] = [];
    const lines: THREE.Line[] = [];
    const nodeGeometry = new THREE.SphereGeometry(0.1, 8, 8);
    const nodeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x3B82F6,
      transparent: true,
      opacity: 0.8
    });

    // Create nodes in 3D space
    for (let i = 0; i < 50; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      scene.add(node);
      nodes.push(node);
    }

    // Create connections between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].position.distanceTo(nodes[j].position);
        if (distance < 5) {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            nodes[i].position,
            nodes[j].position
          ]);
          const material = new THREE.LineBasicMaterial({ 
            color: 0x1E40AF,
            transparent: true,
            opacity: 0.3
          });
          const line = new THREE.Line(geometry, material);
          scene.add(line);
          lines.push(line);
        }
      }
    }

    camera.position.z = 15;

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      // Rotate the entire scene slowly
      scene.rotation.y += 0.002;
      scene.rotation.x += 0.001;

      // Float nodes slightly
      nodes.forEach((node, index) => {
        node.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
        node.rotation.x += 0.01;
        node.rotation.y += 0.01;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!rendererRef.current) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 -z-10" />;
};

export default ThreeBackground;