import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  creations = [
    { name: 'Cookies', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=400&q=80' },
    { name: 'Bread Loafs', image: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&fit=crop&w=400&q=80' },
    { name: 'Danish', image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80' },
    { name: 'Cakes', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80' }
  ];

  activeIndex = 0;

  scrollTo(index: number) {
    this.activeIndex = index;
    const container = document.querySelector('.creations-grid');
    const items = document.querySelectorAll('.creation-item');
    if (container && items[index]) {
      items[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  onScroll(event: any) {
    const container = event.target;
    // Simple calculation to find the closest item to center
    // Assuming uniform item width + gap
    // However, strict center intersection is better handled by scroll position / item width
    // Just using scrollLeft and clientWidth to estimate active index

    // Better approach: Use intersection observer or just simple math if widths are fixed
    // Let's rely on scroll snap to stop at points, but updating the dot might require checking which one is centered.

    // Approximation:
    const scrollLeft = container.scrollLeft;
    const itemWidth = 250 + 30; // width + gap
    // Center of container
    const center = scrollLeft + (container.clientWidth / 2);

    // Find index where center matches
    // This is rough. Using scrollLeft / itemWidth is easier for snap points
    this.activeIndex = Math.round(scrollLeft / itemWidth);
  }
}
