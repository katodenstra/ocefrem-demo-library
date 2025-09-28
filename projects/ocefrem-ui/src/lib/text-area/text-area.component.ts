import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'of-text-area',
  standalone: true,
  imports: [FormsModule],
  template: `
    <label>
      {{ label }}
      <textarea [(ngModel)]="value" class="text-area"></textarea>
    </label>
  `,
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent {
  @Input() label = '';
  @Input() value: string = '';
}