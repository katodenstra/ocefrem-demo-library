import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class TextAreaComponent {
    label = '';
    value = '';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TextAreaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: TextAreaComponent, isStandalone: true, selector: "of-text-area", inputs: { label: "label", value: "value" }, ngImport: i0, template: `
    <label>
      {{ label }}
      <textarea [(ngModel)]="value" class="text-area"></textarea>
    </label>
  `, isInline: true, styles: [".text-area{width:100%;min-height:100px;padding:var(--space-sm);border:1px solid var(--color-border);border-radius:var(--radius-sm)}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TextAreaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'of-text-area', standalone: true, imports: [FormsModule], template: `
    <label>
      {{ label }}
      <textarea [(ngModel)]="value" class="text-area"></textarea>
    </label>
  `, styles: [".text-area{width:100%;min-height:100px;padding:var(--space-sm);border:1px solid var(--color-border);border-radius:var(--radius-sm)}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], value: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29jZWZyZW0tdWkvc3JjL2xpYi90ZXh0LWFyZWEvdGV4dC1hcmVhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQWM3QyxNQUFNLE9BQU8saUJBQWlCO0lBQ25CLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDWCxLQUFLLEdBQVcsRUFBRSxDQUFDO3dHQUZqQixpQkFBaUI7NEZBQWpCLGlCQUFpQixvSEFSbEI7Ozs7O0dBS1QsOE1BTlMsV0FBVzs7NEZBU1YsaUJBQWlCO2tCQVo3QixTQUFTOytCQUNFLGNBQWMsY0FDWixJQUFJLFdBQ1AsQ0FBQyxXQUFXLENBQUMsWUFDWjs7Ozs7R0FLVDs4QkFJUSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29mLXRleHQtYXJlYScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZV0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGxhYmVsPlxuICAgICAge3sgbGFiZWwgfX1cbiAgICAgIDx0ZXh0YXJlYSBbKG5nTW9kZWwpXT1cInZhbHVlXCIgY2xhc3M9XCJ0ZXh0LWFyZWFcIj48L3RleHRhcmVhPlxuICAgIDwvbGFiZWw+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL3RleHQtYXJlYS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRleHRBcmVhQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbGFiZWwgPSAnJztcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZyA9ICcnO1xufSJdfQ==