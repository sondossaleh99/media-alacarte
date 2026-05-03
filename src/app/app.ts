import { Component } from '@angular/core';
import { LandingPageComponent } from './pages';
import { AppFooterComponent, AppNavbarComponent } from './layout';

@Component({
  selector: 'app-root',
  imports: [ AppNavbarComponent, AppFooterComponent, LandingPageComponent ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {

}
