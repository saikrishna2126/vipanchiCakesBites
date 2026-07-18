import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit, OnDestroy {
  private wheelHandlers: { element: Element; handler: (e: WheelEvent) => void }[] = [];

  constructor(public contentService: ContentService) { }

  scroll(element: HTMLElement, distance: number) {
    element.scrollBy({ left: distance, behavior: 'smooth' });
  }

  ngAfterViewInit() {
    // Select all carousels on the page
    const carousels = document.querySelectorAll('.hide-scrollbar');
    carousels.forEach(carousel => {
      const handler = (e: WheelEvent) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          carousel.scrollLeft += e.deltaY;
        }
      };
      
      carousel.addEventListener('wheel', handler as EventListener, { passive: false });
      this.wheelHandlers.push({ element: carousel, handler });
    });
  }

  ngOnDestroy() {
    // Clean up event listeners to prevent memory leaks
    this.wheelHandlers.forEach(({ element, handler }) => {
      element.removeEventListener('wheel', handler as EventListener);
    });
  }
}
