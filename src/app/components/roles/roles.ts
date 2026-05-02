import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTimeLineComponent } from '../../shared';
import { RolesDetailComponent } from './components';
import { DataService } from './data.service';

@Component({
  selector: 'roles-cmp',
  imports: [CommonModule, AppTimeLineComponent, RolesDetailComponent],
  templateUrl: './roles.html',
  styleUrl: './roles.scss',
  providers: [DataService],
})
export class RolesComponent {

  get timlineData() {
    return this.dataService.timlineData;
  }

  set timlineData(data) {
    this.dataService.timlineData = data;
  }

  constructor(private dataService: DataService) { 
  }

  ngOnInit() {
    this.dataService.reset();
  }

  setActiveService(index: number) {
    this.dataService.setActiveService(index);
  }
}