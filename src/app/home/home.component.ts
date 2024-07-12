import { Component, OnInit, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  ngOnInit() {
    // Any other initialization logic
  }

  ngAfterViewInit() {
    this.initTyped();
  }

  private initTyped() {
    const element = document.getElementById('typed-text');
    if (element) {
      const options = {
        strings: ['Programmer', 'Developer', 'Designer', 'Innovator'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
      };

      const typed = new Typed('#typed-text', options);
    } else {
      console.error('Element with id "typed-text" not found');
    }
  }
}
