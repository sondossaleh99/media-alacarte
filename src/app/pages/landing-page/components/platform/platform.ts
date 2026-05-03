import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppButtonComponent } from '../../../../shared';

@Component({
    selector: 'platform-cmp',
    imports: [ CommonModule, AppButtonComponent],
    templateUrl: './platform.html',
    styleUrl: './platform.scss',
})
export class PlatformComponent {

    features = [
        'Plan, Book, and Manage Campaigns',
        'Maximize Reach and ROI',
    ]

    ngOnInit() {
    }

}