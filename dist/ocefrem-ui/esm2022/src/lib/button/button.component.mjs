import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ButtonComponent {
    variant = 'primary';
    disabled = false;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: ButtonComponent, isStandalone: true, selector: "of-button", inputs: { variant: "variant", disabled: "disabled" }, ngImport: i0, template: `
    <button
      class="btn"
      [class.btn--primary]="variant === 'primary'"
      [class.btn--secondary]="variant === 'secondary'"
      [disabled]="disabled">
      <ng-content></ng-content>
    </button>
  `, isInline: true, styles: [".btn{display:inline-flex;align-items:center;justify-content:center;padding:10px 16px;border-radius:var(--radius-pill);border:1px solid transparent;font-weight:600;cursor:pointer;transition:all .2s ease;font-family:var(--font-heading)}.btn--primary{background:var(--color-primary);color:var(--color-primary-contrast)}.btn--secondary{background:var(--color-bg);color:var(--color-text);border-color:var(--color-border)}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'of-button', standalone: true, template: `
    <button
      class="btn"
      [class.btn--primary]="variant === 'primary'"
      [class.btn--secondary]="variant === 'secondary'"
      [disabled]="disabled">
      <ng-content></ng-content>
    </button>
  `, styles: [".btn{display:inline-flex;align-items:center;justify-content:center;padding:10px 16px;border-radius:var(--radius-pill);border:1px solid transparent;font-weight:600;cursor:pointer;transition:all .2s ease;font-family:var(--font-heading)}.btn--primary{background:var(--color-primary);color:var(--color-primary-contrast)}.btn--secondary{background:var(--color-bg);color:var(--color-text);border-color:var(--color-border)}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29jZWZyZW0tdWkvc3JjL2xpYi9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFnQmpELE1BQU0sT0FBTyxlQUFlO0lBQ2pCLE9BQU8sR0FBNEIsU0FBUyxDQUFDO0lBQzdDLFFBQVEsR0FBRyxLQUFLLENBQUM7d0dBRmYsZUFBZTs0RkFBZixlQUFlLDJIQVhoQjs7Ozs7Ozs7R0FRVDs7NEZBR1UsZUFBZTtrQkFkM0IsU0FBUzsrQkFDRSxXQUFXLGNBQ1QsSUFBSSxZQUNOOzs7Ozs7OztHQVFUOzhCQUlRLE9BQU87c0JBQWYsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvZi1idXR0b24nLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwiYnRuXCJcbiAgICAgIFtjbGFzcy5idG4tLXByaW1hcnldPVwidmFyaWFudCA9PT0gJ3ByaW1hcnknXCJcbiAgICAgIFtjbGFzcy5idG4tLXNlY29uZGFyeV09XCJ2YXJpYW50ID09PSAnc2Vjb25kYXJ5J1wiXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2J1dHRvbj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdmFyaWFudDogJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgPSAncHJpbWFyeSc7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG59Il19