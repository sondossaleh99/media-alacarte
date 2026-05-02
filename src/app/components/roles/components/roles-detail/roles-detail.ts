import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../data.service';
import { AppButtonComponent, RolesDetailModel } from '../../../../shared';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'roles-detail-cmp',
  imports: [CommonModule, AppButtonComponent],
  templateUrl: './roles-detail.html',
  styleUrl: './roles-detail.scss',
  animations: [
    trigger('fadeAnimation', [
      transition('* => *', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('600ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})

export class RolesDetailComponent {

  get activeService(): number {
    return this.dataService.activeService;
  }

  get data(): RolesDetailModel {
    return this.dataService.rolesDetailModel[this.activeService];
  }

  constructor(private dataService: DataService) {
  }


  ngOnInit() {
  }

}