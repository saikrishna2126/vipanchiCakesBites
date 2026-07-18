import { Component, OnInit, signal, computed } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  recentBroadcasts = [
    {
      title: 'Weekly Specials: The Sourdoug...',
      time: '2h ago',
      details: 'Sent to 842 customers',
      status: '98% Sent',
      statusClass: 'text-green-600 bg-green-50'
    },
    {
      title: 'Flash Sale! 20% off all Brow...',
      time: 'Yesterday',
      details: 'Sent to 1.2k customers',
      status: 'Completed',
      statusClass: 'text-emerald-600 bg-emerald-50'
    },
    {
      title: 'Welcome to the Bakery Fam...',
      time: '3 days ago',
      details: 'Triggered: New Signups',
      status: 'Automated',
      statusClass: 'text-amber-700 bg-amber-50'
    },
    {
      title: 'Order Confirmation #VB9021',
      time: 'Oct 24',
      details: 'Sent to john.doe@email.com',
      status: 'Delivered',
      statusClass: 'text-green-600 bg-green-50'
    }
  ];

  homeImages: any[] = [];
  galleryImages: any[] = [];
  cupcakeImages: any[] = [];
  muffinImages: any[] = [];
  brownieImages: any[] = [];
  dessertImages: any[] = [];

  selectedItem = signal<any>(null)
  selectedPrefix = signal('');
  // selectedPreview = {
  //   title: 'Home Page Hero',
  //   src: 'assets/cake.jpeg'
  // };
  selectedPreview = computed(() => {
    const item = this.selectedItem();
    const prefix = this.selectedPrefix();
    if (!item) {
      return {
        title: 'Home Page Hero',
        src: 'assets/cake.jpeg'
      };
    }
    return {
      title: prefix ? `${prefix}: ${item.title}` : item.title,
      src: item.src || 'assets/cake.jpeg'
    };
  });

  showToast = false;
  toastMessage = '';

  selectPreview(item: any, prefix: string = '') {
    this.selectedItem.set(item);
    this.selectedPrefix.set(prefix);
  }

  onTitleChange(newTitle: string) {
    const item = this.selectedItem();
    if (item) {
      item.title = newTitle;
      this.selectedItem.set({ ...item });
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file && this.selectedItem) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const max_size = 800;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > max_size) {
              height *= max_size / width;
              width = max_size;
            }
          } else {
            if (height > max_size) {
              width *= max_size / height;
              height = max_size;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);
            this.selectedItem.update(item => {
              item.src = compressedBase64;
              return { ...item }
            });
          }
        };
        img.src = e.target.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  publishChanges() {
    try {
      this.contentService.save();
      this.toastMessage = 'Changes published successfully!';
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
      this.toastMessage = 'Error: Image size too large for database quota!';
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 5000);
    }
  }

  resetDefaults() {
    this.contentService.resetToDefaults();
    this.homeImages = this.contentService.homeImages;
    this.galleryImages = this.contentService.galleryImages;
    this.cupcakeImages = this.contentService.cupcakeImages;
    this.muffinImages = this.contentService.muffinImages;
    this.brownieImages = this.contentService.brownieImages;
    this.dessertImages = this.contentService.dessertImages;

    this.selectedItem.set(this.homeImages[0]);

    this.toastMessage = 'Database reset to default settings!';
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }

  constructor(private contentService: ContentService) {
    this.homeImages = this.contentService.homeImages;
    this.galleryImages = this.contentService.galleryImages;
    this.cupcakeImages = this.contentService.cupcakeImages;
    this.muffinImages = this.contentService.muffinImages;
    this.brownieImages = this.contentService.brownieImages;
    this.dessertImages = this.contentService.dessertImages;
  }

  ngOnInit() {
    this.selectedItem.set(this.homeImages[0]);
  }
}
