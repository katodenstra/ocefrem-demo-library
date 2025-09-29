import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import * as i0 from "@angular/core";
export class BlogExtractComponent {
    title = '';
    author = '';
    excerpt = '';
    button = 'Read more';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BlogExtractComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BlogExtractComponent, isStandalone: true, selector: "of-blog-extract", inputs: { title: "title", author: "author", excerpt: "excerpt", button: "button" }, ngImport: i0, template: `
    <div class="blog-extract">
      <h3>{{ title }}</h3>
      <p class="author">By {{ author }}</p>
      <p class="excerpt">{{ excerpt }}</p>
      <of-button variant="secondary">{{ button }}</of-button>
    </div>
  `, isInline: true, styles: [".blog-extract{padding:var(--space-lg);border-radius:var(--radius-md);background:var(--color-surface);box-shadow:var(--shadow-sm)}.author{font-size:var(--font-size-sm);color:var(--color-secondary)}.excerpt{margin:var(--space-md) 0}\n"], dependencies: [{ kind: "component", type: ButtonComponent, selector: "of-button", inputs: ["variant", "disabled"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BlogExtractComponent, decorators: [{
            type: Component,
            args: [{ selector: 'of-blog-extract', standalone: true, imports: [ButtonComponent], template: `
    <div class="blog-extract">
      <h3>{{ title }}</h3>
      <p class="author">By {{ author }}</p>
      <p class="excerpt">{{ excerpt }}</p>
      <of-button variant="secondary">{{ button }}</of-button>
    </div>
  `, styles: [".blog-extract{padding:var(--space-lg);border-radius:var(--radius-md);background:var(--color-surface);box-shadow:var(--shadow-sm)}.author{font-size:var(--font-size-sm);color:var(--color-secondary)}.excerpt{margin:var(--space-md) 0}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }], author: [{
                type: Input
            }], excerpt: [{
                type: Input
            }], button: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy1leHRyYWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29jZWZyZW0tdWkvc3JjL2xpYi9ibG9nLWV4dHJhY3QvYmxvZy1leHRyYWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0FBZ0I3RCxNQUFNLE9BQU8sb0JBQW9CO0lBQ3RCLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDWCxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ1osT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNiLE1BQU0sR0FBRyxXQUFXLENBQUM7d0dBSm5CLG9CQUFvQjs0RkFBcEIsb0JBQW9CLCtKQVZyQjs7Ozs7OztHQU9ULGtUQVJTLGVBQWU7OzRGQVdkLG9CQUFvQjtrQkFkaEMsU0FBUzsrQkFDRSxpQkFBaUIsY0FDZixJQUFJLFdBQ1AsQ0FBQyxlQUFlLENBQUMsWUFDaEI7Ozs7Ozs7R0FPVDs4QkFJUSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29mLWJsb2ctZXh0cmFjdCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtCdXR0b25Db21wb25lbnRdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJibG9nLWV4dHJhY3RcIj5cbiAgICAgIDxoMz57eyB0aXRsZSB9fTwvaDM+XG4gICAgICA8cCBjbGFzcz1cImF1dGhvclwiPkJ5IHt7IGF1dGhvciB9fTwvcD5cbiAgICAgIDxwIGNsYXNzPVwiZXhjZXJwdFwiPnt7IGV4Y2VycHQgfX08L3A+XG4gICAgICA8b2YtYnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj57eyBidXR0b24gfX08L29mLWJ1dHRvbj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vYmxvZy1leHRyYWN0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQmxvZ0V4dHJhY3RDb21wb25lbnQge1xuICBASW5wdXQoKSB0aXRsZSA9ICcnO1xuICBASW5wdXQoKSBhdXRob3IgPSAnJztcbiAgQElucHV0KCkgZXhjZXJwdCA9ICcnO1xuICBASW5wdXQoKSBidXR0b24gPSAnUmVhZCBtb3JlJztcbn0iXX0=