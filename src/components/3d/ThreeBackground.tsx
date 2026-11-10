import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false, // background optimization
      powerPreference: "low-power",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // PARTICLES FIELD
    const count = 700;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const c1 = new THREE.Color(0x38bdf8); // sky cyan
    const c2 = new THREE.Color(0x818cf8); // indigo
    const c3 = new THREE.Color(0x4f46e5); // deep indigo

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      const rnd = Math.random();
      const col = rnd < 0.4 ? c1 : rnd < 0.7 ? c2 : c3;
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // FLOATING SUBTLE WIREFRAME POLYHEDRA
    const polyGroup = new THREE.Group();
    scene.add(polyGroup);

    const octaGeo = new THREE.OctahedronGeometry(1.2, 0);
    const polyMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });

    const mesh1 = new THREE.Mesh(octaGeo, polyMat);
    mesh1.position.set(-18, 8, -5);
    polyGroup.add(mesh1);

    const tetraGeo = new THREE.TetrahedronGeometry(1.5, 0);
    const polyMat2 = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const mesh2 = new THREE.Mesh(tetraGeo, polyMat2);
    mesh2.position.set(16, -10, -2);
    polyGroup.add(mesh2);

    const dodecaGeo = new THREE.DodecahedronGeometry(1.4, 0);
    const polyMat3 = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const mesh3 = new THREE.Mesh(dodecaGeo, polyMat3);
    mesh3.position.set(15, 12, -8);
    polyGroup.add(mesh3);

    // SCROLL & MOUSE INTERACTION
    let mouseX = 0;
    let mouseY = 0;
    let scrollY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    const onScroll = () => {
      scrollY = window.scrollY * 0.003;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onResize);

    // ANIMATION
    let frameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Camera soft tracking
      camera.position.x += (mouseX * 1.5 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 1.5 - camera.position.y) * 0.02;

      // Particle rotation
      points.rotation.y = time * 0.02;
      points.rotation.x = scrollY * 0.2;

      // Polyhedra rotation
      mesh1.rotation.x = time * 0.15;
      mesh1.rotation.y = time * 0.2;
      mesh2.rotation.y = -time * 0.18;
      mesh2.rotation.z = time * 0.12;
      mesh3.rotation.x = time * 0.1;
      mesh3.rotation.z = -time * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);

      geometry.dispose();
      material.dispose();
      octaGeo.dispose();
      tetraGeo.dispose();
      dodecaGeo.dispose();
      polyMat.dispose();
      polyMat2.dispose();
      polyMat3.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};

export default ThreeBackground;

