import { Component } from '@angular/core';
import { HeaderComponent, LandingPageComponent } from './components';

@Component({
  selector: 'app-root',
  imports: [LandingPageComponent, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
