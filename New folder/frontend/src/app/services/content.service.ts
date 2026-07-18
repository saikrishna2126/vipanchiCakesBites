import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  homeImages = [
    { title: 'Home Page Hero', subtitle: '1920x1080px. Main landing.', src: 'assets/cake.jpeg', isLarge: true },
    { title: 'Featured Cake', subtitle: 'Square crop', src: 'assets/Engagement cake.jpeg' },
    { title: 'Featured Brownies', subtitle: 'Square crop', src: 'assets/brownies.jpeg' },
    { title: 'Featured Cupcakes', subtitle: 'Square crop', src: 'assets/cupckes_edited.jpeg' },
    { title: 'About Us Image', subtitle: 'Landscape ratio', src: 'assets/art_perfect_bite.png' },
    { title: 'Enquiry Thank You', subtitle: 'Landscape ratio', src: 'assets/thank_you_bakery.png' }
  ];

  galleryImages = [
    { title: 'Gallery Item 1', src: 'assets/cupckes_edited.jpeg' },
    { title: 'Gallery Item 2', src: 'assets/Engagement cake.jpeg' },
    { title: 'Gallery Item 3', src: 'assets/art_perfect_bite.png' },
    { title: 'Gallery Item 4', src: 'assets/brownies.jpeg' },
    { title: 'Gallery Item 5', src: 'assets/cake.jpeg' }
  ];

  cupcakeImages = [
    { title: 'Vanilla Classic', src: 'assets/images/menu/vanilla_classic_cupcake.png' },
    { title: 'Vanilla Biscoff', src: 'assets/images/menu/vanilla_biscoff_cupcake.png' },
    { title: 'Vanilla Strawberry', src: 'assets/images/menu/vanilla_strawberry_cupcake.png' },
    { title: 'Vanilla Chocolate', src: 'assets/images/menu/vanilla_chocolate_cupcake.png' },
    { title: 'Vanilla Caramel', src: 'assets/images/menu/vanilla_caramel_cupcake.png' },
    { title: 'Chocolate Classic', src: 'assets/images/menu/chocolate_classic_cupcake.png' },
    { title: 'Chocolate Biscoff', src: 'assets/images/menu/chocolate_biscoff_cupcake.png' },
    { title: 'Chocolate Nutella', src: 'assets/images/menu/chocolate_nutella_cupcake.png' },
    { title: 'Carrot Cupcake', src: 'assets/images/menu/carrot_cupcake.png' }
  ];

  muffinImages = [
    { title: 'Banana Muffin', src: 'assets/images/menu/banana_muffin.png' },
    { title: 'Vanilla Muffin', src: 'assets/images/menu/vanilla_muffin.png' },
    { title: 'Chocolate Muffin', src: 'assets/images/menu/chocolate_muffin.png' },
    { title: 'Carrot Muffin', src: 'assets/images/menu/carrot_muffin.png' }
  ];

  brownieImages = [
    { title: 'Fudgy Brownie', src: 'assets/images/menu/fudgy_brownie.png' },
    { title: 'Walnut Brownie', src: 'assets/images/menu/walnut_brownie.png' },
    { title: 'Sea Salt Brownie', src: 'assets/images/menu/sea_salt_brownie.png' }
  ];

  dessertImages = [
    { title: 'Milk Tres Leches', src: 'assets/images/menu/milk_tres_leches.png' },
    { title: 'Saffron Pistachio', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtE8H2gbmcJoC2a3DvfSwOIQSRVkhrOgElZC76IUdUP6cPnkJZS53mibKCNa_IDjqZiqFtkzWjAxlxMVt0LruDxE6WhBkHRwPZ-4DpsnySRWLLAuOcQBnf5Yep625XYayWcVpz0L8LIUcJ7rREMSON8XEoyiCeT3DjDCJvNLw1ytjwPkZhL75PIlTzSLcDFwt68OxY5V8UeR__Xs2wpUAoJVtHpzWfOT1Tsfo3mHB2lBL-hAaEHJxwWZRzuembNIPeKihcnwImTp8' },
    { title: 'Classic Espresso', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXGo-WGk081rB5fiji0JVyHdFLAlAIZTtcomfk9OF4WfhhQ--717C69ubcMK-Hzzu5zYBn5NdW_IrtFsKM9Tpj00KARQVzJ-trOEpfLNHDtWbsqYDtmfdN0P0pxupCyli565RUQMxs0qJUwM6ER6sVMnc8khuFBcjc7FPBRIYwWqvPDuDBAYami5N1-6QyEwT57j9gklGnJvt5NMq-HXvjzcfX6PW_-owxqfRSmZeKmChIWKDDs37x0u4ypsAbRCzmbfZKdKgsAP4' },
    { title: 'Lotus Biscoff', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS44EOsbPpV_mhAqkB1_ebMWsMSxxL5gUhgXFZfr2n7wVbDF9nq1x67rwgrxLMqzinfurSsRm17XCZ6ajtG7qWF6kwtNhNn9wLLAxTyYRYj8JPQLXWGAU9uD82t8NjTXT-LmIw_tdh9J2xMrhiZ0LeAiZ1Zx3uQXcWV-qzrxGbRozRU3bjW6Xcg4-LGXgHnf6-mxf2bbXRCB62sFz7sw_DVZJnqkXo1o0-PXTXQQ-rUoM0a0-knXG2GMHP76unZ-KYUx0yzkESvpM' },
    { title: 'Berry Tiramisu', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRn62fVL3n5GAMVchCIRFio3HKdifXpYk_C_1RwKehRQuvg2AxhnGAOxOVBKxH12yeNqtOdxxoTQp53Vu89qa6CPx-460FAvvZ_R0av9MGn2kfMhKN49pNXQCPCjEoO1p297lK2DQxGgedJfvIgxkOuHi1RRaL4maXzUiw29ujXQdi6i1_ZbhEFALHzYQpgVKzbkg5qUDrH3ADTNH4wUjcPGpUaCBODBrHcpFVaIQFZMsbyAHqiCUVeu57zDM3Vgv4rvZ84O7mQoI' }
  ];

  constructor() {
    this.load();
  }

  save() {
    try {
      localStorage.setItem('vipanchi_homeImages', JSON.stringify(this.homeImages));
      localStorage.setItem('vipanchi_galleryImages', JSON.stringify(this.galleryImages));
      localStorage.setItem('vipanchi_cupcakeImages', JSON.stringify(this.cupcakeImages));
      localStorage.setItem('vipanchi_muffinImages', JSON.stringify(this.muffinImages));
      localStorage.setItem('vipanchi_brownieImages', JSON.stringify(this.brownieImages));
      localStorage.setItem('vipanchi_dessertImages', JSON.stringify(this.dessertImages));
    } catch (e) {
      console.error('Storage save failed:', e);
      throw e;
    }
  }

  load() {
    const home = localStorage.getItem('vipanchi_homeImages');
    if (home) this.homeImages = JSON.parse(home);

    const gallery = localStorage.getItem('vipanchi_galleryImages');
    if (gallery) this.galleryImages = JSON.parse(gallery);

    const cupcakes = localStorage.getItem('vipanchi_cupcakeImages');
    if (cupcakes) this.cupcakeImages = JSON.parse(cupcakes);

    const muffins = localStorage.getItem('vipanchi_muffinImages');
    if (muffins) this.muffinImages = JSON.parse(muffins);

    const brownies = localStorage.getItem('vipanchi_brownieImages');
    if (brownies) this.brownieImages = JSON.parse(brownies);

    const desserts = localStorage.getItem('vipanchi_dessertImages');
    if (desserts) this.dessertImages = JSON.parse(desserts);
  }

  resetToDefaults() {
    localStorage.removeItem('vipanchi_homeImages');
    localStorage.removeItem('vipanchi_galleryImages');
    localStorage.removeItem('vipanchi_cupcakeImages');
    localStorage.removeItem('vipanchi_muffinImages');
    localStorage.removeItem('vipanchi_brownieImages');
    localStorage.removeItem('vipanchi_dessertImages');
    
    this.homeImages = [
      { title: 'Home Page Hero', subtitle: '1920x1080px. Main landing.', src: 'assets/cake.jpeg', isLarge: true },
      { title: 'Featured Cake', subtitle: 'Square crop', src: 'assets/Engagement cake.jpeg' },
      { title: 'Featured Brownies', subtitle: 'Square crop', src: 'assets/brownies.jpeg' },
      { title: 'Featured Cupcakes', subtitle: 'Square crop', src: 'assets/cupckes_edited.jpeg' },
      { title: 'About Us Image', subtitle: 'Landscape ratio', src: 'assets/art_perfect_bite.png' },
      { title: 'Enquiry Thank You', subtitle: 'Landscape ratio', src: 'assets/thank_you_bakery.png' }
    ];

    this.galleryImages = [
      { title: 'Gallery Item 1', src: 'assets/cupckes_edited.jpeg' },
      { title: 'Gallery Item 2', src: 'assets/Engagement cake.jpeg' },
      { title: 'Gallery Item 3', src: 'assets/art_perfect_bite.png' },
      { title: 'Gallery Item 4', src: 'assets/brownies.jpeg' },
      { title: 'Gallery Item 5', src: 'assets/cake.jpeg' }
    ];

    this.cupcakeImages = [
      { title: 'Vanilla Classic', src: 'assets/images/menu/vanilla_classic_cupcake.png' },
      { title: 'Vanilla Biscoff', src: 'assets/images/menu/vanilla_biscoff_cupcake.png' },
      { title: 'Vanilla Strawberry', src: 'assets/images/menu/vanilla_strawberry_cupcake.png' },
      { title: 'Vanilla Chocolate', src: 'assets/images/menu/vanilla_chocolate_cupcake.png' },
      { title: 'Vanilla Caramel', src: 'assets/images/menu/vanilla_caramel_cupcake.png' },
      { title: 'Chocolate Classic', src: 'assets/images/menu/chocolate_classic_cupcake.png' },
      { title: 'Chocolate Biscoff', src: 'assets/images/menu/chocolate_biscoff_cupcake.png' },
      { title: 'Chocolate Nutella', src: 'assets/images/menu/chocolate_nutella_cupcake.png' },
      { title: 'Carrot Cupcake', src: 'assets/images/menu/carrot_cupcake.png' }
    ];

    this.muffinImages = [
      { title: 'Banana Muffin', src: 'assets/images/menu/banana_muffin.png' },
      { title: 'Vanilla Muffin', src: 'assets/images/menu/vanilla_muffin.png' },
      { title: 'Chocolate Muffin', src: 'assets/images/menu/chocolate_muffin.png' },
      { title: 'Carrot Muffin', src: 'assets/images/menu/carrot_muffin.png' }
    ];

    this.brownieImages = [
      { title: 'Fudgy Brownie', src: 'assets/images/menu/fudgy_brownie.png' },
      { title: 'Walnut Brownie', src: 'assets/images/menu/walnut_brownie.png' },
      { title: 'Sea Salt Brownie', src: 'assets/images/menu/sea_salt_brownie.png' }
    ];

    this.dessertImages = [
      { title: 'Milk Tres Leches', src: 'assets/images/menu/milk_tres_leches.png' },
      { title: 'Saffron Pistachio', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtE8H2gbmcJoC2a3DvfSwOIQSRVkhrOgElZC76IUdUP6cPnkJZS53mibKCNa_IDjqZiqFtkzWjAxlxMVt0LruDxE6WhBkHRwPZ-4DpsnySRWLLAuOcQBnf5Yep625XYayWcVpz0L8LIUcJ7rREMSON8XEoyiCeT3DjDCJvNLw1ytjwPkZhL75PIlTzSLcDFwt68OxY5V8UeR__Xs2wpUAoJVtHpzWfOT1Tsfo3mHB2lBL-hAaEHJxwWZRzuembNIPeKihcnwImTp8' },
      { title: 'Classic Espresso', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXGo-WGk081rB5fiji0JVyHdFLAlAIZTtcomfk9OF4WfhhQ--717C69ubcMK-Hzzu5zYBn5NdW_IrtFsKM9Tpj00KARQVzJ-trOEpfLNHDtWbsqYDtmfdN0P0pxupCyli565RUQMxs0qJUwM6ER6sVMnc8khuFBcjc7FPBRIYwWqvPDuDBAYami5N1-6QyEwT57j9gklGnJvt5NMq-HXvjzcfX6PW_-owxqfRSmZeKmChIWKDDs37x0u4ypsAbRCzmbfZKdKgsAP4' },
      { title: 'Lotus Biscoff', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS44EOsbPpV_mhAqkB1_ebMWsMSxxL5gUhgXFZfr2n7wVbDF9nq1x67rwgrxLMqzinfurSsRm17XCZ6ajtG7qWF6kwtNhNn9wLLAxTyYRYj8JPQLXWGAU9uD82t8NjTXT-LmIw_tdh9J2xMrhiZ0LeAiZ1Zx3uQXcWV-qzrxGbRozRU3bjW6Xcg4-LGXgHnf6-mxf2bbXRCB62sFz7sw_DVZJnqkXo1o0-PXTXQQ-rUoM0a0-knXG2GMHP76unZ-KYUx0yzkESvpM' },
      { title: 'Berry Tiramisu', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRn62fVL3n5GAMVchCIRFio3HKdifXpYk_C_1RwKehRQuvg2AxhnGAOxOVBKxH12yeNqtOdxxoTQp53Vu89qa6CPx-460FAvvZ_R0av9MGn2kfMhKN49pNXQCPCjEoO1p297lK2DQxGgedJfvIgxkOuHi1RRaL4maXzUiw29ujXQdi6i1_ZbhEFALHzYQpgVKzbkg5qUDrH3ADTNH4wUjcPGpUaCBODBrHcpFVaIQFZMsbyAHqiCUVeu57zDM3Vgv4rvZ84O7mQoI' }
    ];
  }
}
