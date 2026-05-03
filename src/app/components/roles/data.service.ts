import { Injectable } from "@angular/core";
import { RolesDetailModel, TimeLineItemModel } from "../../shared";

@Injectable()

export class DataService {

  activeService = 0;
  rolesDetailModel: RolesDetailModel[] = [
    {
      title: 'Advertisers',
      description: 'Create, distribute and manage your campaigns across multiple channels.',
      headline: 'Run & optimize ads across multiple platforms effortlessly.',
      image: 'images/advertisers.jpg'
    },
    {
      title: 'Agencies',
      description: 'Get new clients and contracts & enhance the workflow with automated tools.',
      headline: 'Empower your agency with advanced media tools.',
      image: 'images/agencies.jpg'
    },
    {
      title: 'Media Owners',
      description: 'Get a clear view of billing, manage campaigns and control all in one place.',
      headline: 'Take control of your media inventory.',
      image: 'images/mediaowners.png'
    }
  ];

  timlineData: TimeLineItemModel[] = [
    {
      title: 'Advertisers',
      icon: 'fa-solid fa-bullhorn',
      iconColor: '#ff3358'
    },
    {
      title: 'Agencies',
      icon: 'fa-solid fa-briefcase',
      iconColor: '#673ab7'
    },
    {
      title: 'Media Owners',
      icon: 'fa-regular fa-camera',
      iconColor: '#1AA0A5'
    },
  ];

  setActiveService(index: number) {
    this.activeService = index;
  }

  reset() {
    this.activeService = 0;
  }
} 