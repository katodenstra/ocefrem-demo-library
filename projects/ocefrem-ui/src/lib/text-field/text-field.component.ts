import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'of-text-field',
  standalone: true,
  imports: [FormsModule],
  template: `
    <label>
      {{ label }}
      <input [type]="type" [(ngModel)]="value" class="text-field" />
    </label>
  `,
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent {
  @Input() label = '';
  @Input() type: string = 'text';
  @Input() value: string = '';
}