import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = signal(false);

  constructor(public router: Router) { }

  toggleMenu() {
    this.isMenuOpen.update(open => !open);
  }

  isMenuPage(): boolean {
    return this.router.url.split('#')[0].split('?')[0] === '/menu';
  }
}
