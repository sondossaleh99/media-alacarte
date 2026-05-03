import { Component } from '@angular/core';
import {
  HeroComponent,
  RolesComponent,
  SolutionsComponent,
  AchievementsComponent,
  PlatformComponent
} from './components';

@Component({
  selector: 'landing-page-cmp',
  imports: [
    HeroComponent,
    RolesComponent,
    SolutionsComponent,
    AchievementsComponent,
    PlatformComponent
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPageComponent {

}