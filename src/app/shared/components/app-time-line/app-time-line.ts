import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TimeLineItemModel } from '../../model';

@Component({
  selector: 'app-time-line',
  imports: [CommonModule],
  templateUrl: './app-time-line.html',
  styleUrl: './app-time-line.scss',
})
export class AppTimeLineComponent {

  @Input() services: TimeLineItemModel[] = [];
  @Output() activeServiceChange = new EventEmitter<number>();

  ngOnInit() {
  }

  setActiveService(index: number) {
    this.activeServiceChange.emit(index);
  }

}