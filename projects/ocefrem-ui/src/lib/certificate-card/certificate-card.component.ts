import { Component, Input } from "@angular/core";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: "of-certificate-card",
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <div class="certificate-card">
      <img [src]="icon" alt="" class="certificate-card__icon" />
      <h3>{{ title }}</h3>
      <p class="subtitle">{{ subtitle }}</p>
      <of-button variant="primary">{{ button }}</of-button>
    </div>
  `,
  styleUrls: ["./certificate-card.component.scss"],
})
export class CertificateCardComponent {
  @Input() icon = "";
  @Input() title = "";
  @Input() subtitle = "";
  @Input() button = "Learn more";
}
