import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-particles-background',
  templateUrl: './particles-background.component.html',
  styleUrls: ['./particles-background.component.scss']
})
export class ParticlesBackgroundComponent implements OnInit {
  @ViewChild('container', { static: true }) container!: ElementRef;

  ngOnInit() {
    setTimeout(() => {
      if (typeof (window as any).particlesJS === 'function') {
        (window as any).particlesJS('particles-js', {
          "particles": {
            "number": { "value": 100 },
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5 },
            "size": { "value": 3 },
            "line_linked": { "enable": true },
            "move": { "enable": true, "speed": 3 }
          },
          "interactivity": {
            "events": {
              "onhover": { "enable": true, "mode": "repulse" },
              "onclick": { "enable": true, "mode": "push" }
            }
          }
        });
      } else {
        console.error('particlesJS function is not available');
      }
    }, 1000);
  }
}
