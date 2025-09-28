import * as i0 from '@angular/core';
import { Input, Component } from '@angular/core';

class ButtonComponent {
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

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent };
//# sourceMappingURL=ocefrem-ui.mjs.map
