import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-particles-background',
  template: '<div id="particles-js" style="position: absolute; width: 100%; height: 100%;"></div>',
  styleUrls: ['./particles-background.component.scss']
})
export class ParticlesBackgroundComponent implements OnInit {
  ngOnInit() {
    (window as any).particlesJS('particles-js', {
      "particles": {
        "number": { "value": 100 },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5 },
        "size": { "value": 3 },
        "line_linked": { "enable": true },
        "move": { "enable": true, "speed": 6 }
      },
      "interactivity": {
        "events": {
          "onhover": { "enable": true, "mode": "repulse" },
          "onclick": { "enable": true, "mode": "push" }
        }
      }
    });
  }
}
