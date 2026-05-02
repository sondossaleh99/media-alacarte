import { Component } from '@angular/core';
import { HeaderComponent, HeroComponent, RolesComponent } from '../../components';

@Component({
  selector: 'landing-page-cmp',
  imports: [HeroComponent,RolesComponent,HeaderComponent],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPageComponent {

}