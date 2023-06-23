import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  imageObject: Array<object> = [
    {
      image: '../../../assets/footer-logo.png',
      alt: 'alt of image',
      title: 'title of image',
    },
    {
      image: '../../../assets/contact-bg.png',
      title: 'Image title', //Optional: You can use this key if want to show image with title
      alt: 'Image alt', //Optional: You can use this key if want to show image with alt
      order: 1, //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
    },
  ];
}
