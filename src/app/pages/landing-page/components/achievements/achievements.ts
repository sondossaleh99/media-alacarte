import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementDetailComponent } from './components';
import { SectionHeaderComponent } from '../section-header';

@Component({
  selector: 'achievements-cmp',
  imports: [CommonModule, AchievementDetailComponent, SectionHeaderComponent],
  templateUrl: './achievements.html',
  styleUrl: './achievements.scss',
})

export class AchievementsComponent {

  sectionHeaderData = {
    title: 'Collaborate. Elevate. Succeed',
    subTitle: 'Powering Collaboration Across Media',
    description: 'Empower advertisers, agencies, and media owners to work seamlessly.'
  };

  ngOnInit() {
  }
}