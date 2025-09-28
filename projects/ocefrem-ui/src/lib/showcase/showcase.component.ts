import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'of-showcase',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <h1>OCEFREM UI – Showcase</h1>
    <p>Testing the library build with a single Button component.</p>
    <of-button variant="primary">Primary Button</of-button>
    <of-button variant="secondary">Secondary Button</of-button>
  `
})
export class OfShowcaseComponent {}