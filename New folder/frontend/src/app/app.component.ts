import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    public router: Router,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => {
      if (this.isAdminRoute()) {
        this.renderer.addClass(this.document.body, 'admin-body');
      } else {
        this.renderer.removeClass(this.document.body, 'admin-body');
      }
    });
  }

  isAdminRoute(): boolean {
    return this.router.url.startsWith('/admin');
  }
}
