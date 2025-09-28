import { Component, Input } from "@angular/core";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: "of-service-card",
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <div class="service-card">
      <img [src]="image" alt="" class="service-card__image" />
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
      <div class="service-card__actions">
        <of-button *ngIf="primaryButton" variant="primary">{{
          primaryButton
        }}</of-button>
        <of-button *ngIf="secondaryButton" variant="secondary">{{
          secondaryButton
        }}</of-button>
      </div>
    </div>
  `,
  styleUrls: ["./service-card.component.scss"],
})
export class ServiceCardComponent {
  @Input() image = "";
  @Input() title = "";
  @Input() text = "";
  @Input() primaryButton?: string;
  @Input() secondaryButton?: string;
}
