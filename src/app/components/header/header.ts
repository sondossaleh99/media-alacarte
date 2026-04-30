import { Component } from '@angular/core';
import { NavMenu, NavMenuLookup } from '../../core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'header-cmp',
  imports: [CommonModule],
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