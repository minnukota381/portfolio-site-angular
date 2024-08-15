import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Corrected to 'styleUrls'
  animations: [
    // Example animation: Fade in and out
    trigger('fadeAnimation', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [animate('500ms ease-in-out')])
    ])
  ]
})
export class AppComponent {
  title = 'portfolio-angular';
  isVisible = true; // Example property for animation control

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
