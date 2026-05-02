import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTimeLineComponent } from '../../shared';
import { SolutionDetailComponent } from './components';
import { SolutionDataService } from './solution-data.service';

@Component({
  selector: 'solution-cmp',
  imports: [CommonModule, AppTimeLineComponent, SolutionDetailComponent],
  templateUrl: './solution.html',
  styleUrl: './solution.scss',
  providers: [SolutionDataService],
})
export class SolutionComponent {

  get timlineData() {
    return this.solutionDataService.timlineData;
  }

  set timlineData(data) {
    this.solutionDataService.timlineData = data;
  }

  constructor(private solutionDataService: SolutionDataService) { 
  }

  ngOnInit() {
    this.solutionDataService.reset();
  }

  setActiveService(index: number) {
    this.solutionDataService.setActiveService(index);
  }
}