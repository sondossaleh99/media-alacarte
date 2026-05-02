import { Component } from '@angular/core';
import { HeaderComponent, HeroComponent, RolesComponent, SolutionsComponent } from '../../components';

@Component({
  selector: 'landing-page-cmp',
  imports: [HeroComponent, HeaderComponent, RolesComponent, SolutionsComponent],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPageComponent {

}