import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface ThreeHeroCanvasProps {
  className?: string;
}

const ThreeHeroCanvas: React.FC<ThreeHeroCanvasProps> = ({ className = "" }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // SCENE, CAMERA, RENDERER
    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x38bdf8, 3, 50);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xa855f7, 3, 50);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x6366f1, 2, 50);
    pointLight3.position.set(0, 0, 7);
    scene.add(pointLight3);

    // 3D MAIN GROUP
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. INNER GLOWING ICOSAHEDRON
    const innerGeo = new THREE.IcosahedronGeometry(1.3, 1);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0x1e1b4b,
      emissive: 0x4338ca,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
      transparent: true,
      opacity: 0.88,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // 2. OUTER WIREFRAME CAGE
    const outerGeo = new THREE.IcosahedronGeometry(1.7, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const outerMesh = new THREE.Mesh(outerGeo, wireMat);
    mainGroup.add(outerMesh);

    // 3. ORBITING TORUS RINGS
    const ringGeo1 = new THREE.TorusGeometry(2.3, 0.02, 16, 100);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x60a5fa,
      emissive: 0x3b82f6,
      emissiveIntensity: 0.5,
      roughness: 0.3,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    mainGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.7, 0.018, 16, 100);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0xc084fc,
      emissive: 0x9333ea,
      emissiveIntensity: 0.5,
      roughness: 0.3,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 4;
    mainGroup.add(ring2);

    // 4. FLOATING PARTICLES AROUND CORE
    const particleCount = 1200;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x38bdf8);
    const color2 = new THREE.Color(0xa855f7);
    const color3 = new THREE.Color(0x818cf8);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.5 + Math.random() * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const mixed = Math.random();
      const chosenColor = mixed < 0.4 ? color1 : mixed < 0.7 ? color2 : color3;
      particleColors[i * 3] = chosenColor.r;
      particleColors[i * 3 + 1] = chosenColor.g;
      particleColors[i * 3 + 2] = chosenColor.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(particleColors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // MOUSE INTERACTION & PARALLAX
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 1.5;
      targetY = y * 1.5;

      if (isDragging) {
        const deltaX = event.clientX - previousMousePosition.x;
        const deltaY = event.clientY - previousMousePosition.y;
        mainGroup.rotation.y += deltaX * 0.008;
        mainGroup.rotation.x += deltaY * 0.008;
        previousMousePosition = { x: event.clientX, y: event.clientY };
      }
    };

    const handleMouseDown = (event: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: event.clientX, y: event.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mousedown", handleMouseDown);

    // RESIZE LISTENER
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // ANIMATION LOOP
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      if (!isDragging) {
        mainGroup.rotation.y = elapsedTime * 0.25 + mouseX;
        mainGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.2 + mouseY;
      }

      innerMesh.rotation.y = -elapsedTime * 0.4;
      innerMesh.rotation.z = Math.cos(elapsedTime * 0.3) * 0.2;

      outerMesh.rotation.y = elapsedTime * 0.3;
      outerMesh.rotation.x = elapsedTime * 0.2;

      ring1.rotation.z = elapsedTime * 0.4;
      ring2.rotation.z = -elapsedTime * 0.3;

      // Subtle pulse
      const scale = 1 + Math.sin(elapsedTime * 1.5) * 0.04;
      innerMesh.scale.set(scale, scale, scale);

      // Particle gentle rotation
      particles.rotation.y = elapsedTime * 0.04;
      particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousedown", handleMouseDown);

      // Dispose resources
      innerGeo.dispose();
      innerMat.dispose();
      outerGeo.dispose();
      wireMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full cursor-grab active:cursor-grabbing select-none ${className}`}
      title="Click and drag to rotate in 3D"
    />
  );
};

export default ThreeHeroCanvas;

