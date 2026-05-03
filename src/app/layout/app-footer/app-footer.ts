import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-cmp',
  imports: [CommonModule],
  templateUrl: './app-footer.html',
  styleUrl: './app-footer.scss',
})
export class AppFooterComponent {

  links = [
    { name: 'The Platform', url: '#' },
    { name: 'Features', url: '#' },
    { name: 'Benefits', url: '#' },
    { name: 'Request a Demo', url: '#' },
    { name: 'Contact Us', url: '#' },
    { name: 'About Us', url: '#' },
    { name: 'Privacy Policy', url: '#' },
    { name: 'Terms of Service', url: '#' }
  ];

  contacts = [
    {
      icon: 'fa-solid fa-location-dot',
      text: 'Makateb 2 Building Floor 4, Office 406\nDubai Production City, Dubai\nUnited Arab Of Emirate'
    },
    {
      icon: 'fa-solid fa-envelope',
      text: 'admin@mediaalacarte.net'
    },
  ];

  ngOnInit() {
  }

}