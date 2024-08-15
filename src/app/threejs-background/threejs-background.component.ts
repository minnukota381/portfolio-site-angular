import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-threejs-background',
  template: '<div #container style="position: absolute; width: 100%; height: 100%;"></div>',
  styleUrls: ['./threejs-background.component.scss']
})
export class ThreejsBackgroundComponent implements OnInit {
  @ViewChild('container', { static: true }) container!: ElementRef;

  ngOnInit() {
    if (this.container) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      this.container.nativeElement.appendChild(renderer.domElement);

      // Add particles
      const geometry = new THREE.BufferGeometry();
      const vertices = [];
      for (let i = 0; i < 1000; i++) {
        vertices.push(Math.random() * 1000 - 500);
        vertices.push(Math.random() * 1000 - 500);
        vertices.push(Math.random() * 1000 - 500);
      }
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

      // Increase particle size
      const material = new THREE.PointsMaterial({
        color: 0x888888,
        size: 2
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      camera.position.z = 500;

      // Use a clock to control animation speed
      const clock = new THREE.Clock();
      const rotationSpeed = 0.005;

      function animate() {
        requestAnimationFrame(animate);

        // Update rotation based on clock time
        const delta = clock.getDelta();
        particles.rotation.x += rotationSpeed * delta;
        particles.rotation.y += rotationSpeed * delta;

        renderer.render(scene, camera);
      }
      animate();
    }
  }
}
