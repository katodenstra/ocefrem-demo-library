import { Component } from "@angular/core";
import { ButtonComponent } from "../button/button.component";
import { CardComponent } from "../card/card.component";
import { ServiceCardComponent } from "../service-card/service-card.component";
import { CertificateCardComponent } from "../certificate-card/certificate-card.component";
import { TextFieldComponent } from "../text-field/text-field.component";
import { TextAreaComponent } from "../text-area/text-area.component";
import { BlogExtractComponent } from "../blog-extract/blog-extract.component";

@Component({
  selector: "of-showcase",
  standalone: true,
  imports: [
    ButtonComponent,
    CardComponent,
    ServiceCardComponent,
    CertificateCardComponent,
    TextFieldComponent,
    TextAreaComponent,
    BlogExtractComponent,
  ],
  template: `
    <h1>OCEFREM UI – Showcase</h1>
    <section>
      <h2>Buttons</h2>
      <of-button variant="primary">Primary</of-button>
      <of-button variant="secondary">Secondary</of-button>
    </section>

    <section>
      <h2>Card</h2>
      <of-card
        image="/assets/card-left-sample.jpg"
        title="Left Card"
        text="This is a left-aligned card. It shows an image on the left side."
        align="left"
      ></of-card>
      <of-card
        image="/assets/card-right-sample.jpg"
        title="Right Card"
        text="This is a right-aligned card. It shows an image on the right side."
        align="right"
      ></of-card>
    </section>

    <section>
      <h2>Service Card</h2>
      <of-service-card
        image="./assets/service-card-sample.jpg"
        title="Service Card Sample"
        text="This is a service card. This card will give you an example of a service from Ocefrem. <br>You can have multimple cards in one section. It can have primary and secondary actions."
        primaryButton="Hire"
        secondaryButton="Learn More"
      >
      </of-service-card>
    </section>
    <section class="service-card-grid">
      <h2>Use of Service Card Grid</h2>
      <of-service-card
        image="./assets/service-card-sample.jpg"
        title="Service Card Wth Both Buttons"
        text="This is a service card. This card will give you an example of a service from Ocefrem. <br>You can have multimple cards in one section. It can have primary and secondary actions."
        primaryButton="Hire"
        secondaryButton="Learn More"
      >
      </of-service-card>
      <of-service-card
        image="./assets/service-card-sample.jpg"
        title="Service Card With Primary Button"
        text="This is a service card. This card will give you an example of a service from Ocefrem. <br>You can have multimple cards in one section. It can have primary and secondary actions."
        primaryButton="Hire"
      >
      </of-service-card>
      <of-service-card
        image="./assets/service-card-sample.jpg"
        title="Service Card With No Buttons"
        text="This is a service card. This card will give you an example of a service from Ocefrem. <br>You can have multimple cards in one section. It can have primary and secondary actions."
      >
      </of-service-card>
    </section>

    <section>
      <h2>Certificate Card</h2>
      <of-certificate-card
        icon="https://via.placeholder.com/50"
        title="ISO Certified"
        subtitle="Quality Management"
        button="View Certificate"
      >
      </of-certificate-card>
    </section>

    <section>
      <h2>Form Fields</h2>
      <of-text-field label="Name"></of-text-field>
      <of-text-area label="Message"></of-text-area>
    </section>

    <section>
      <h2>Blog Extract</h2>
      <of-blog-extract
        title="Building UI Libraries"
        author="Mauricio Villada"
        excerpt="Learn how to design and code reusable Angular components with SCSS tokens..."
        button="Read More"
      >
      </of-blog-extract>
    </section>
  `,
  styleUrls: ["./showcase.component.scss"],
})
export class OfShowcaseComponent {}
