import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "../button/button.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ServiceCardComponent {
    image = "";
    title = "";
    text = "";
    primaryButton;
    secondaryButton;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ServiceCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: ServiceCardComponent, isStandalone: true, selector: "of-service-card", inputs: { image: "image", title: "title", text: "text", primaryButton: "primaryButton", secondaryButton: "secondaryButton" }, ngImport: i0, template: `
    <div class="service-card">
      <img *ngIf="image" [src]="image" alt="" class="service-card__image" />

      <div class="service-card__content">
        <h3>{{ title }}</h3>
        <p [innerHTML]="text"></p>
      </div>

      <div
        class="service-card__actions"
        *ngIf="primaryButton || secondaryButton"
      >
        <of-button *ngIf="primaryButton" variant="primary">
          {{ primaryButton }}
        </of-button>
        <of-button *ngIf="secondaryButton" variant="secondary">
          {{ secondaryButton }}
        </of-button>
      </div>
    </div>
  `, isInline: true, styles: [".service-card{background:var(--color-surface);border-radius:var(--radius-lg);padding:var(--space-lg);display:flex;flex-direction:column;align-items:stretch;text-align:left;box-shadow:var(--shadow-sm, 0 2px 4px rgba(0, 0, 0, .05))}.service-card__image{width:100%;height:auto;border-radius:var(--radius-md);margin-bottom:var(--space-md);object-fit:cover}.service-card__content{flex:1;margin-bottom:var(--space-md)}.service-card__content h3{font-family:var(--font-heading);font-size:var(--font-size-lg);margin-bottom:var(--space-sm)}.service-card__content p{font-family:var(--font-body);font-size:var(--font-size-md);color:var(--color-text)}.service-card__actions{display:flex;gap:var(--space-sm);margin-top:auto}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: ButtonComponent, selector: "of-button", inputs: ["variant", "disabled"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ServiceCardComponent, decorators: [{
            type: Component,
            args: [{ selector: "of-service-card", standalone: true, imports: [CommonModule, ButtonComponent], template: `
    <div class="service-card">
      <img *ngIf="image" [src]="image" alt="" class="service-card__image" />

      <div class="service-card__content">
        <h3>{{ title }}</h3>
        <p [innerHTML]="text"></p>
      </div>

      <div
        class="service-card__actions"
        *ngIf="primaryButton || secondaryButton"
      >
        <of-button *ngIf="primaryButton" variant="primary">
          {{ primaryButton }}
        </of-button>
        <of-button *ngIf="secondaryButton" variant="secondary">
          {{ secondaryButton }}
        </of-button>
      </div>
    </div>
  `, styles: [".service-card{background:var(--color-surface);border-radius:var(--radius-lg);padding:var(--space-lg);display:flex;flex-direction:column;align-items:stretch;text-align:left;box-shadow:var(--shadow-sm, 0 2px 4px rgba(0, 0, 0, .05))}.service-card__image{width:100%;height:auto;border-radius:var(--radius-md);margin-bottom:var(--space-md);object-fit:cover}.service-card__content{flex:1;margin-bottom:var(--space-md)}.service-card__content h3{font-family:var(--font-heading);font-size:var(--font-size-lg);margin-bottom:var(--space-sm)}.service-card__content p{font-family:var(--font-body);font-size:var(--font-size-md);color:var(--color-text)}.service-card__actions{display:flex;gap:var(--space-sm);margin-top:auto}\n"] }]
        }], propDecorators: { image: [{
                type: Input
            }], title: [{
                type: Input
            }], text: [{
                type: Input
            }], primaryButton: [{
                type: Input
            }], secondaryButton: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29jZWZyZW0tdWkvc3JjL2xpYi9zZXJ2aWNlLWNhcmQvc2VydmljZS1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUE4QjdELE1BQU0sT0FBTyxvQkFBb0I7SUFDdEIsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNYLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDWCxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ1YsYUFBYSxDQUFVO0lBQ3ZCLGVBQWUsQ0FBVTt3R0FMdkIsb0JBQW9COzRGQUFwQixvQkFBb0IseU1BeEJyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJULGl4QkF0QlMsWUFBWSxtSUFBRSxlQUFlOzs0RkF5QjVCLG9CQUFvQjtrQkE1QmhDLFNBQVM7K0JBQ0UsaUJBQWlCLGNBQ2YsSUFBSSxXQUNQLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxZQUM5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJUOzhCQUlRLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4uL2J1dHRvbi9idXR0b24uY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJvZi1zZXJ2aWNlLWNhcmRcIixcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQnV0dG9uQ29tcG9uZW50XSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwic2VydmljZS1jYXJkXCI+XG4gICAgICA8aW1nICpuZ0lmPVwiaW1hZ2VcIiBbc3JjXT1cImltYWdlXCIgYWx0PVwiXCIgY2xhc3M9XCJzZXJ2aWNlLWNhcmRfX2ltYWdlXCIgLz5cblxuICAgICAgPGRpdiBjbGFzcz1cInNlcnZpY2UtY2FyZF9fY29udGVudFwiPlxuICAgICAgICA8aDM+e3sgdGl0bGUgfX08L2gzPlxuICAgICAgICA8cCBbaW5uZXJIVE1MXT1cInRleHRcIj48L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cInNlcnZpY2UtY2FyZF9fYWN0aW9uc1wiXG4gICAgICAgICpuZ0lmPVwicHJpbWFyeUJ1dHRvbiB8fCBzZWNvbmRhcnlCdXR0b25cIlxuICAgICAgPlxuICAgICAgICA8b2YtYnV0dG9uICpuZ0lmPVwicHJpbWFyeUJ1dHRvblwiIHZhcmlhbnQ9XCJwcmltYXJ5XCI+XG4gICAgICAgICAge3sgcHJpbWFyeUJ1dHRvbiB9fVxuICAgICAgICA8L29mLWJ1dHRvbj5cbiAgICAgICAgPG9mLWJ1dHRvbiAqbmdJZj1cInNlY29uZGFyeUJ1dHRvblwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICB7eyBzZWNvbmRhcnlCdXR0b24gfX1cbiAgICAgICAgPC9vZi1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbXCIuL3NlcnZpY2UtY2FyZC5jb21wb25lbnQuc2Nzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VydmljZUNhcmRDb21wb25lbnQge1xuICBASW5wdXQoKSBpbWFnZSA9IFwiXCI7XG4gIEBJbnB1dCgpIHRpdGxlID0gXCJcIjtcbiAgQElucHV0KCkgdGV4dCA9IFwiXCI7XG4gIEBJbnB1dCgpIHByaW1hcnlCdXR0b24/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNlY29uZGFyeUJ1dHRvbj86IHN0cmluZztcbn1cbiJdfQ==