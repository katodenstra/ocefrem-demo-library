import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: "of-service-card",
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
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
