import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: "of-certificate-card",
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <div class="certificate-card">
      <i
        *ngIf="icon"
        class=""
        [ngClass]="icon"
        style="color: var(--color-primary);"
      ></i>

      <h3>{{ title }}</h3>
      <p>{{ subtitle }}</p>

      <of-button *ngIf="button" variant="primary">{{ button }}</of-button>
    </div>
  `,
  styleUrls: ["./certificate-card.component.scss"],
})
export class CertificateCardComponent {
  @Input() icon?: string;
  @Input() title = "";
  @Input() subtitle = "";
  @Input() button?: string;
}
