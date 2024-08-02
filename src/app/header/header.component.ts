import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isNavbarCollapsed = true;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPos = window.scrollY;
    const navbar = document.querySelector('.navbar');
    if (scrollPos > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
