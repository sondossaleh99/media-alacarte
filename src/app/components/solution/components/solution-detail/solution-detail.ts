import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionDataService } from '../../solution-data.service';
import { AppButtonComponent, SolutionDetailModel } from '../../../../shared';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'solution-detail-cmp',
  imports: [CommonModule, AppButtonComponent],
  templateUrl: './solution-detail.html',
  styleUrl: './solution-detail.scss',
  animations: [
    trigger('fadeAnimation', [
      transition('* => *', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('600ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})

export class SolutionDetailComponent {

  get activeService(): number {
    return this.dataService.activeService;
  }

  get data(): SolutionDetailModel {
    return this.dataService.solutionDetails[this.activeService];
  }

  constructor(private dataService: SolutionDataService) {
  }


  ngOnInit() {
  }

}