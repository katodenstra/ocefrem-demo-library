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
  `, isInline: true, styles: [".text-field{width:100%;padding:var(--space-sm);border:1px solid var(--color-border);border-radius:var(--radius-sm)}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TextFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'of-text-field', standalone: true, imports: [FormsModule], template: `
    <label>
      {{ label }}
      <input [type]="type" [(ngModel)]="value" class="text-field" />
    </label>
  `, styles: [".text-field{width:100%;padding:var(--space-sm);border:1px solid var(--color-border);border-radius:var(--radius-sm)}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], type: [{
                type: Input
            }], value: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vY2VmcmVtLXVpL3NyYy9saWIvdGV4dC1maWVsZC90ZXh0LWZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQWM3QyxNQUFNLE9BQU8sa0JBQWtCO0lBQ3BCLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDWCxJQUFJLEdBQVcsTUFBTSxDQUFDO0lBQ3RCLEtBQUssR0FBVyxFQUFFLENBQUM7d0dBSGpCLGtCQUFrQjs0RkFBbEIsa0JBQWtCLG1JQVJuQjs7Ozs7R0FLVCw4TEFOUyxXQUFXOzs0RkFTVixrQkFBa0I7a0JBWjlCLFNBQVM7K0JBQ0UsZUFBZSxjQUNiLElBQUksV0FDUCxDQUFDLFdBQVcsQ0FBQyxZQUNaOzs7OztHQUtUOzhCQUlRLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29mLXRleHQtZmllbGQnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGVdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxsYWJlbD5cbiAgICAgIHt7IGxhYmVsIH19XG4gICAgICA8aW5wdXQgW3R5cGVdPVwidHlwZVwiIFsobmdNb2RlbCldPVwidmFsdWVcIiBjbGFzcz1cInRleHQtZmllbGRcIiAvPlxuICAgIDwvbGFiZWw+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL3RleHQtZmllbGQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0RmllbGRDb21wb25lbnQge1xuICBASW5wdXQoKSBsYWJlbCA9ICcnO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSAndGV4dCc7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmcgPSAnJztcbn0iXX0=