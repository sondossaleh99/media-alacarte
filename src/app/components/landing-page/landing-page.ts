import { Component } from '@angular/core';
import { HeroComponent } from './components';

@Component({
  selector: 'landing-page-cmp',
  imports: [HeroComponent],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPageComponent {

}