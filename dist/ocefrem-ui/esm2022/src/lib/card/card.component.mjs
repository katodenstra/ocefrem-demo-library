import { Component, Input } from "@angular/core";
import * as i0 from "@angular/core";
export class CardComponent {
    image = "";
    title = "";
    text = "";
    align = "left";
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: CardComponent, isStandalone: true, selector: "of-card", inputs: { image: "image", title: "title", text: "text", align: "align" }, ngImport: i0, template: `
    <div class="card" [class.card--right]="align === 'right'">
      <img [src]="image" alt="" class="card__image" />
      <div class="card__content">
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
      </div>
    </div>
  `, isInline: true, styles: [".card{display:flex;gap:var(--space-lg);align-items:center;background:var(--color-surface);border-radius:var(--radius-lg);box-shadow:var(--shadow-sm);padding:var(--space-lg);margin-bottom:var(--space-lg)}.card--right{flex-direction:row-reverse}.card__image{width:160px;height:auto;border-radius:var(--radius-md)}.card__content h3{margin:0 0 var(--space-sm) 0;font-family:var(--font-heading)}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{ selector: "of-card", standalone: true, template: `
    <div class="card" [class.card--right]="align === 'right'">
      <img [src]="image" alt="" class="card__image" />
      <div class="card__content">
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
      </div>
    </div>
  `, styles: [".card{display:flex;gap:var(--space-lg);align-items:center;background:var(--color-surface);border-radius:var(--radius-lg);box-shadow:var(--shadow-sm);padding:var(--space-lg);margin-bottom:var(--space-lg)}.card--right{flex-direction:row-reverse}.card__image{width:160px;height:auto;border-radius:var(--radius-md)}.card__content h3{margin:0 0 var(--space-sm) 0;font-family:var(--font-heading)}\n"] }]
        }], propDecorators: { image: [{
                type: Input
            }], title: [{
                type: Input
            }], text: [{
                type: Input
            }], align: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vY2VmcmVtLXVpL3NyYy9saWIvY2FyZC9jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFnQmpELE1BQU0sT0FBTyxhQUFhO0lBQ2YsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNYLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDWCxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ1YsS0FBSyxHQUFxQixNQUFNLENBQUM7d0dBSi9CLGFBQWE7NEZBQWIsYUFBYSw2SUFYZDs7Ozs7Ozs7R0FRVDs7NEZBR1UsYUFBYTtrQkFkekIsU0FBUzsrQkFDRSxTQUFTLGNBQ1AsSUFBSSxZQUNOOzs7Ozs7OztHQVFUOzhCQUlRLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwib2YtY2FyZFwiLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgW2NsYXNzLmNhcmQtLXJpZ2h0XT1cImFsaWduID09PSAncmlnaHQnXCI+XG4gICAgICA8aW1nIFtzcmNdPVwiaW1hZ2VcIiBhbHQ9XCJcIiBjbGFzcz1cImNhcmRfX2ltYWdlXCIgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19jb250ZW50XCI+XG4gICAgICAgIDxoMz57eyB0aXRsZSB9fTwvaDM+XG4gICAgICAgIDxwPnt7IHRleHQgfX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbXCIuL2NhcmQuY29tcG9uZW50LnNjc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQge1xuICBASW5wdXQoKSBpbWFnZSA9IFwiXCI7XG4gIEBJbnB1dCgpIHRpdGxlID0gXCJcIjtcbiAgQElucHV0KCkgdGV4dCA9IFwiXCI7XG4gIEBJbnB1dCgpIGFsaWduOiBcImxlZnRcIiB8IFwicmlnaHRcIiA9IFwibGVmdFwiO1xufVxuIl19