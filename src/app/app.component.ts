import { Component } from "@angular/core";
import { OfShowcaseComponent } from "../../projects/ocefrem-ui/src/lib/showcase/showcase.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [OfShowcaseComponent],
  template: `<of-showcase></of-showcase>`,
})
export class AppComponent {}
