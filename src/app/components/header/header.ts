import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppButtonComponent, NavMenu, NavMenuLookup } from '../../shared';

@Component({
  selector: 'header-cmp',
  imports: [CommonModule, AppButtonComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {

  items = NavMenuLookup.getLookup();
  selectedItem: NavMenu = NavMenu.PLATFORM;

  ngOnInit() {
  }

  setActive(id: NavMenu) {
    this.selectedItem = id;
  }
}