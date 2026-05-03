import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'section-header-cmp',
  imports: [CommonModule],
  templateUrl: './section-header.html',
  styleUrl: './section-header.scss',
})
export class SectionHeaderComponent {

  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() description: string = '';

  ngOnInit() {
  }

}