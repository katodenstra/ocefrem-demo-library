import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'of-blog-extract',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <div class="blog-extract">
      <h3>{{ title }}</h3>
      <p class="author">By {{ author }}</p>
      <p class="excerpt">{{ excerpt }}</p>
      <of-button variant="secondary">{{ button }}</of-button>
    </div>
  `,
  styleUrls: ['./blog-extract.component.scss']
})
export class BlogExtractComponent {
  @Input() title = '';
  @Input() author = '';
  @Input() excerpt = '';
  @Input() button = 'Read more';
}