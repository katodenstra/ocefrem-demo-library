import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "../button/button.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class CertificateCardComponent {
    icon;
    title = "";
    subtitle = "";
    button;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CertificateCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: CertificateCardComponent, isStandalone: true, selector: "of-certificate-card", inputs: { icon: "icon", title: "title", subtitle: "subtitle", button: "button" }, ngImport: i0, template: `
    <div class="certificate-card">
      <i
        *ngIf="icon"
        [ngClass]="icon"
        style="color: var(--color-primary); font-size: 2rem; margin-bottom: var(--space-md);"
      ></i>

      <h3>{{ title }}</h3>
      <p>{{ subtitle }}</p>

      <of-button *ngIf="button" variant="primary">{{ button }}</of-button>
    </div>
  `, isInline: true, styles: [".certificate-card{text-align:center;padding:var(--space-lg);background:var(--color-surface);border-radius:var(--radius-md);box-shadow:var(--shadow-sm)}.certificate-card__icon{max-width:60px;margin-bottom:var(--space-md)}.subtitle{color:var(--color-muted);margin-bottom:var(--space-md)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: ButtonComponent, selector: "of-button", inputs: ["variant", "disabled"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CertificateCardComponent, decorators: [{
            type: Component,
            args: [{ selector: "of-certificate-card", standalone: true, imports: [CommonModule, ButtonComponent], template: `
    <div class="certificate-card">
      <i
        *ngIf="icon"
        [ngClass]="icon"
        style="color: var(--color-primary); font-size: 2rem; margin-bottom: var(--space-md);"
      ></i>

      <h3>{{ title }}</h3>
      <p>{{ subtitle }}</p>

      <of-button *ngIf="button" variant="primary">{{ button }}</of-button>
    </div>
  `, styles: [".certificate-card{text-align:center;padding:var(--space-lg);background:var(--color-surface);border-radius:var(--radius-md);box-shadow:var(--shadow-sm)}.certificate-card__icon{max-width:60px;margin-bottom:var(--space-md)}.subtitle{color:var(--color-muted);margin-bottom:var(--space-md)}\n"] }]
        }], propDecorators: { icon: [{
                type: Input
            }], title: [{
                type: Input
            }], subtitle: [{
                type: Input
            }], button: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VydGlmaWNhdGUtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vY2VmcmVtLXVpL3NyYy9saWIvY2VydGlmaWNhdGUtY2FyZC9jZXJ0aWZpY2F0ZS1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFzQjdELE1BQU0sT0FBTyx3QkFBd0I7SUFDMUIsSUFBSSxDQUFVO0lBQ2QsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNYLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDZCxNQUFNLENBQVU7d0dBSmQsd0JBQXdCOzRGQUF4Qix3QkFBd0IsaUtBaEJ6Qjs7Ozs7Ozs7Ozs7OztHQWFULHdXQWRTLFlBQVksaU9BQUUsZUFBZTs7NEZBaUI1Qix3QkFBd0I7a0JBcEJwQyxTQUFTOytCQUNFLHFCQUFxQixjQUNuQixJQUFJLFdBQ1AsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLFlBQzlCOzs7Ozs7Ozs7Ozs7O0dBYVQ7OEJBSVEsSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4uL2J1dHRvbi9idXR0b24uY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJvZi1jZXJ0aWZpY2F0ZS1jYXJkXCIsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEJ1dHRvbkNvbXBvbmVudF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImNlcnRpZmljYXRlLWNhcmRcIj5cbiAgICAgIDxpXG4gICAgICAgICpuZ0lmPVwiaWNvblwiXG4gICAgICAgIFtuZ0NsYXNzXT1cImljb25cIlxuICAgICAgICBzdHlsZT1cImNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTsgZm9udC1zaXplOiAycmVtOyBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1tZCk7XCJcbiAgICAgID48L2k+XG5cbiAgICAgIDxoMz57eyB0aXRsZSB9fTwvaDM+XG4gICAgICA8cD57eyBzdWJ0aXRsZSB9fTwvcD5cblxuICAgICAgPG9mLWJ1dHRvbiAqbmdJZj1cImJ1dHRvblwiIHZhcmlhbnQ9XCJwcmltYXJ5XCI+e3sgYnV0dG9uIH19PC9vZi1idXR0b24+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogW1wiLi9jZXJ0aWZpY2F0ZS1jYXJkLmNvbXBvbmVudC5zY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBDZXJ0aWZpY2F0ZUNhcmRDb21wb25lbnQge1xuICBASW5wdXQoKSBpY29uPzogc3RyaW5nO1xuICBASW5wdXQoKSB0aXRsZSA9IFwiXCI7XG4gIEBJbnB1dCgpIHN1YnRpdGxlID0gXCJcIjtcbiAgQElucHV0KCkgYnV0dG9uPzogc3RyaW5nO1xufVxuIl19