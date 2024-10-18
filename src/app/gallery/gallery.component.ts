import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
   standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  items: NodeListOf<Element>;

  constructor(public router: Router) {
    // Initialize the items on component creation
    this.items = document.querySelectorAll('.item');
  }

  next() {
    const slide = document.querySelector('.slide') as HTMLElement;
    if (this.items.length > 0) {
      slide.appendChild(this.items[0]);
    }
  }

  prev() {
    const slide = document.querySelector('.slide') as HTMLElement;
    if (this.items.length > 0) {
      slide.prepend(this.items[this.items.length - 1]);
    }
  
  }

  // navigateToHome() {
  //   window.location.href = 'home-page.html';
    // ياهشام محمد يا صفحتك  بعنوان  home-page.html  استبدال
  //}
  goHome() {
    // Logic to navigate back to home
    // You can use Angular Router for navigation, for example:
    this.router.navigate(['/home']);
  }
}
