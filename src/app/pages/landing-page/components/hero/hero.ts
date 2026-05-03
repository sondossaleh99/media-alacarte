import { Component } from '@angular/core';
import { HeroDetailComponent } from './components';

@Component({
  selector: 'hero-cmp',
  imports: [HeroDetailComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {

  ngOnInit() {
  }
  
}