import * as i0 from '@angular/core';
import { Input, Component } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@angular/forms';
import { FormsModule } from '@angular/forms';

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
  `, isInline: true, styles: [".btn{display:inline-flex;align-items:center;justify-content:center;padding:10px 16px;border-radius:var(--radius-pill);border:1px solid transparent;font-weight:600;cursor:pointer;transition:all .2s ease;font-family:var(--font-heading);font-size:var(--font-size-sm)}.btn--primary{background:var(--color-primary);color:var(--color-primary-contrast);border-radius:var(--radius-sm)}.btn--primary:hover{background:var(--color-primary-hover)}.btn--secondary{background:var(--color-secondary);color:var(--color-text);border-color:var(--color-border);border-radius:var(--radius-sm)}.btn--secondary:hover{opacity:.8}\n"] });
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
  `, styles: [".btn{display:inline-flex;align-items:center;justify-content:center;padding:10px 16px;border-radius:var(--radius-pill);border:1px solid transparent;font-weight:600;cursor:pointer;transition:all .2s ease;font-family:var(--font-heading);font-size:var(--font-size-sm)}.btn--primary{background:var(--color-primary);color:var(--color-primary-contrast);border-radius:var(--radius-sm)}.btn--primary:hover{background:var(--color-primary-hover)}.btn--secondary{background:var(--color-secondary);color:var(--color-text);border-color:var(--color-border);border-radius:var(--radius-sm)}.btn--secondary:hover{opacity:.8}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

class CardComponent {
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

class ServiceCardComponent {
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

class CertificateCardComponent {
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

class TextFieldComponent {
    label = '';
    type = 'text';
    value = '';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TextFieldComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: TextFieldComponent, isStandalone: true, selector: "of-text-field", inputs: { label: "label", type: "type", value: "value" }, ngImport: i0, template: `
    <label>
      {{ label }}
      <input [type]="type" [(ngModel)]="value" class="text-field" />
    </label>
  `, isInline: true, styles: [".text-field{flex:1;min-width:220px}.text-field label{display:none}.text-field input{width:100%;height:48px;padding:var(--space-md);border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:var(--font-size-md);font-family:var(--font-body);color:var(--color-text);background:var(--color-surface)}.text-field input::placeholder{color:var(--color-muted)}.text-field input:focus{outline:none;border-color:var(--color-primary)}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TextFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'of-text-field', standalone: true, imports: [FormsModule], template: `
    <label>
      {{ label }}
      <input [type]="type" [(ngModel)]="value" class="text-field" />
    </label>
  `, styles: [".text-field{flex:1;min-width:220px}.text-field label{display:none}.text-field input{width:100%;height:48px;padding:var(--space-md);border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:var(--font-size-md);font-family:var(--font-body);color:var(--color-text);background:var(--color-surface)}.text-field input::placeholder{color:var(--color-muted)}.text-field input:focus{outline:none;border-color:var(--color-primary)}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], type: [{
                type: Input
            }], value: [{
                type: Input
            }] } });

class TextAreaComponent {
    label = '';
    value = '';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TextAreaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: TextAreaComponent, isStandalone: true, selector: "of-text-area", inputs: { label: "label", value: "value" }, ngImport: i0, template: `
    <label>
      {{ label }}
      <textarea [(ngModel)]="value" class="text-area"></textarea>
    </label>
  `, isInline: true, styles: [".text-area{display:block;width:100%}.text-area label{display:none}.text-area textarea{width:100%;min-height:160px;padding:var(--space-md);border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:var(--font-size-md);font-family:var(--font-body);color:var(--color-text)}.text-area textarea::placeholder{color:var(--color-muted)}.text-area textarea:focus{outline:none;border-color:var(--color-primary)}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TextAreaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'of-text-area', standalone: true, imports: [FormsModule], template: `
    <label>
      {{ label }}
      <textarea [(ngModel)]="value" class="text-area"></textarea>
    </label>
  `, styles: [".text-area{display:block;width:100%}.text-area label{display:none}.text-area textarea{width:100%;min-height:160px;padding:var(--space-md);border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:var(--font-size-md);font-family:var(--font-body);color:var(--color-text)}.text-area textarea::placeholder{color:var(--color-muted)}.text-area textarea:focus{outline:none;border-color:var(--color-primary)}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], value: [{
                type: Input
            }] } });

class BlogExtractComponent {
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

/**
 * Generated bundle index. Do not edit.
 */

export { BlogExtractComponent, ButtonComponent, CardComponent, CertificateCardComponent, ServiceCardComponent, TextAreaComponent, TextFieldComponent };
//# sourceMappingURL=ocefrem-ui.mjs.map
