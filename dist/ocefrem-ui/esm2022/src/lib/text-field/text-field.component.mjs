import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class TextFieldComponent {
    label = '';
    type = 'text';
    value = '';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TextFieldComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: TextFieldComponent, isStandalone: true, selector: "of-text-field", inputs: { label: "label", type: "type", value: "value" }, ngImport: i0, template: `
    <label>
      {{ label }}
      <input [type]="type" [(ngModel)]="value" class="text-field" />
    </label>
  `, isInline: true, styles: [".text-field{flex:1;min-width:220px}.text-field label{display:none}.text-field input{width:100%;height:48px;padding:var(--space-md);border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:var(--font-size-md);font-family:var(--font-body);color:var(--color-text);background:var(--color-surface)}.text-field input::placeholder{color:var(--color-muted)}.text-field input:focus{outline:none;border-color:var(--color-primary)}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vY2VmcmVtLXVpL3NyYy9saWIvdGV4dC1maWVsZC90ZXh0LWZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQWM3QyxNQUFNLE9BQU8sa0JBQWtCO0lBQ3BCLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDWCxJQUFJLEdBQVcsTUFBTSxDQUFDO0lBQ3RCLEtBQUssR0FBVyxFQUFFLENBQUM7d0dBSGpCLGtCQUFrQjs0RkFBbEIsa0JBQWtCLG1JQVJuQjs7Ozs7R0FLVCxvZ0JBTlMsV0FBVzs7NEZBU1Ysa0JBQWtCO2tCQVo5QixTQUFTOytCQUNFLGVBQWUsY0FDYixJQUFJLFdBQ1AsQ0FBQyxXQUFXLENBQUMsWUFDWjs7Ozs7R0FLVDs4QkFJUSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvZi10ZXh0LWZpZWxkJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bGFiZWw+XG4gICAgICB7eyBsYWJlbCB9fVxuICAgICAgPGlucHV0IFt0eXBlXT1cInR5cGVcIiBbKG5nTW9kZWwpXT1cInZhbHVlXCIgY2xhc3M9XCJ0ZXh0LWZpZWxkXCIgLz5cbiAgICA8L2xhYmVsPlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi90ZXh0LWZpZWxkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGV4dEZpZWxkQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbGFiZWwgPSAnJztcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nID0gJ3RleHQnO1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nID0gJyc7XG59Il19