import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppButtonComponent } from '../app-button';

@Component({
  selector: 'app-card',
  imports: [CommonModule, AppButtonComponent],
  templateUrl: './app-card.html',
  styleUrl: './app-card.scss',
})
export class AppCardComponent {

  @Input('icon') icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() actionLabel: string = '';

  @Output() actionClick = new EventEmitter<void>();

  ngOnInit() {
  }

  onButtonClick() {
    this.actionClick.emit();
  }
}