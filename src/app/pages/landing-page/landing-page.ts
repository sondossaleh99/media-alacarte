import { Component } from '@angular/core';
import { HeaderComponent, HeroComponent, SolutionComponent } from '../../components';

@Component({
  selector: 'landing-page-cmp',
  imports: [HeroComponent, HeaderComponent, SolutionComponent],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPageComponent {

}