import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './app-button.html',
  styleUrl: './app-button.scss',
})
export class AppButtonComponent {
  
  @Input() label: string = ''; 
  @Input() variant: 'filled' | 'outline' = 'filled';  

  @Output() onClick = new EventEmitter<void>(); 

  onButtonClick() {
    this.onClick.emit(); 
  }
}