import { Component, Input } from "@angular/core";

@Component({
  selector: "of-card",
  standalone: true,
  template: `
    <div class="card" [class.card--right]="align === 'right'">
      <img [src]="image" alt="" class="card__image" />
      <div class="card__content">
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
      </div>
    </div>
  `,
  styleUrls: ["./card.component.scss"],
})
export class CardComponent {
  @Input() image = "";
  @Input() title = "";
  @Input() text = "";
  @Input() align: "left" | "right" = "left";
}
