import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTimeLineComponent } from '../../shared';
import { RolesDetailComponent } from './components';
import { DataService } from './data.service';
import { SectionHeaderComponent } from '../section-header';

@Component({
  selector: 'roles-cmp',
  imports: [CommonModule, AppTimeLineComponent, RolesDetailComponent, SectionHeaderComponent],
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

  sectionHeaderData = {
    subTitle: 'What We Do',
    title: 'Our Services',
    description: 'Advertisers launch campaigns, agencies manage clients and media owners monetize their inventory.'
  }


  ngOnInit() {
    this.dataService.reset();
  }

  setActiveService(index: number) {
    this.dataService.setActiveService(index);
  }
}