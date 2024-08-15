import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';
import { BufferGeometry, Float32BufferAttribute, Points, PointsMaterial, Scene, PerspectiveCamera, WebGLRenderer, Clock } from 'three';

@Component({
  selector: 'app-star-background',
  template: '<div #container style="position: absolute; width: 100%; height: 100%;"></div>',
  styleUrls: ['./star-background.component.scss']
})
export class StarBackgroundComponent implements OnInit {
  @ViewChild('container', { static: true }) container!: ElementRef;

  private camera!: PerspectiveCamera;
  private scene!: Scene;
  private renderer!: WebGLRenderer;
  private clock!: Clock;
  private particles!: Points;

  ngOnInit() {
    this.initThreeJs();
    this.animate();
  }

  private initThreeJs() {
    // Set up scene, camera, and renderer
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 1;

    this.renderer = new WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.nativeElement.appendChild(this.renderer.domElement);

    // Add controls
    new OrbitControls(this.camera, this.renderer.domElement);

    // Generate particles
    const geometry = new BufferGeometry();
    const vertices = new Float32Array(5000 * 3);
    const radius = 1.5; // Adjust the radius to control the distance between particles
    for (let i = 0; i < vertices.length; i += 3) {
      // Distribute particles within a sphere with a certain radius
      vertices[i] = (Math.random() * 2 - 1) * radius;
      vertices[i + 1] = (Math.random() * 2 - 1) * radius;
      vertices[i + 2] = (Math.random() * 2 - 1) * radius;
    }
    geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));

    const material = new PointsMaterial({
      size: 0.005,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.7,
      depthWrite: false
    });

    this.particles = new Points(geometry, material);
    this.scene.add(this.particles);

    this.clock = new Clock();
  }

  private animate() {
    requestAnimationFrame(() => this.animate());

    // Slow down the rotation of particles
    const delta = this.clock.getDelta();
    this.particles.rotation.x -= delta / 50; // Slower rotation
    this.particles.rotation.y -= delta / 70; // Slower rotation

    this.renderer.render(this.scene, this.camera);
  }
}
