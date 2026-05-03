import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppButtonComponent, NavMenu, NavMenuLookup } from '../../shared';

@Component({
  selector: 'app-navbar-cmp',
  imports: [CommonModule, AppButtonComponent],
  templateUrl: './app-navbar.html',
  styleUrl: './app-navbar.scss',
})
export class AppNavbarComponent {

  items = NavMenuLookup.getLookup();
  selectedItem: NavMenu = NavMenu.PLATFORM;

  ngOnInit() {
  }

  setActive(id: NavMenu) {
    this.selectedItem = id;
  }
}