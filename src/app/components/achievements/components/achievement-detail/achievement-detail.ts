import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'achievement-detail-cmp',
  imports: [CommonModule],
  templateUrl: './achievement-detail.html',
  styleUrl: './achievement-detail.scss',
})

export class AchievementDetailComponent {

  achievements = [
    {
      title: 'Top Agencies Trust Media LaCarte',
      description: '110+',
    },
     {
      title: 'Advertisers Reaching the Right Audience',
      description: '1M',
    },
     {
      title: 'Seamless Media Transactions for Owners',
      description: '98.99%',
    },
  ]

  ngOnInit() {
  }
}