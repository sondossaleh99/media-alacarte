import { Component } from '@angular/core';
import { AppCardComponent } from '../../shared';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../section-header';

@Component({
    selector: 'solutions-cmp',
    imports: [AppCardComponent, CommonModule, SectionHeaderComponent],
    templateUrl: './solutions.html',
    styleUrl: './solutions.scss',
})
export class SolutionsComponent {

    solutionDetails = [
        {
            title: 'Campaign Planning',
            description: 'Plan and optimize your ad campaigns with data-driven insights and seamless collaboration for maximum impact.',
            icon: 'fa fa-bullhorn'
        },
        {
            title: 'Media Buying',
            description: 'Effortlessly book media slots with AI-powered automation, ensuring cost efficiency and better reach.',
            icon: 'fa-solid fa-video'
        },
        {
            title: 'Ad Distribution',
            description: 'Distribute ads across multiple channels while ensuring precise targeting and real-time tracking.',
            icon: 'fa-solid fa-ad'
        },
        {
            title: 'Performance Analytics',
            description: 'Gain actionable insights with real-time performance tracking to maximize your ROI and refine future strategies.',
            icon: 'fa-solid fa-chart-pie'
        },
    ]

    sectionHeaderData = {
        subTitle: 'Why Media Ala carte',
        title: 'Our All Solution for Smarter Media Buying.',
        description: 'Plan and optimize your ad campaigns with data-driven insights and seamless collaboration for maximum impact.'
    }

    ngOnInit() {
    }

}