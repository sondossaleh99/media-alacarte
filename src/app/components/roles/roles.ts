import { Component } from '@angular/core';
import { AppCardComponent } from '../../shared';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'roles-cmp',
  imports: [AppCardComponent, CommonModule],
  templateUrl: './roles.html',
  styleUrl: './roles.scss',
})
export class RolesComponent {

  roleDeatils = [
    {
      title: 'Advertisers',
      description: 'Create, distribute and manage your campaigns across multiple channels.',
      icon: 'fa fa-bullhorn'
    },
    {
      title: 'Agencies',
      description: 'Get new clients and contracts & enhance the workflow with automated tools.',
      icon: 'fa fa-users'
    },
    {
      title: 'Media Owners',
      description: 'Get a clear view of billing, manage campaigns and control all in one place.',
      icon: 'fa-regular fa-camera'
    },
  ]
  ngOnInit() {
  }

}