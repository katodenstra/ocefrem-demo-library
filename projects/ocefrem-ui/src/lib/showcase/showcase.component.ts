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
      <div class="button-row">
        <of-button variant="primary">Primary</of-button>
        <of-button variant="secondary">Secondary</of-button>
      </div>
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
    <section>
      <h2>Use of Service Card Grid</h2>
      <div class="service-card-grid">
        <of-service-card
          image="./assets/service-card-sample.jpg"
          title="Service Card With Both Buttons"
          text="This is a service card. This card will give you an example of a service from Ocefrem. <br>You can have multimple cards in one section. It can have primary and secondary actions."
          primaryButton="Hire"
          secondaryButton="Learn More"
        >
        </of-service-card>
        <of-service-card
          image="./assets/service-card-sample.jpg"
          title="Service Card With Primary Button"
          text="This is a service card. This card will give you an example of a service from Ocefrem. <br>You can have multiple cards in one section. This one has just a Primary button."
          primaryButton="Hire"
        >
        </of-service-card>
        <of-service-card
          image="./assets/service-card-sample.jpg"
          title="Service Card With No Buttons"
          text="This is a service card. This card will give you an example of a service from Ocefrem. <br>You can have multimple cards in one section. This card has no buttons."
        >
        </of-service-card>
      </div>
    </section>

    <section>
      <h2>Certificate Card</h2>
      <of-certificate-card
        icon="fa-regular fa-id-badge"
        title="ISO Certified"
        subtitle="NOM-114-SCFI-2016"
        button="View Certificate"
      >
      </of-certificate-card>
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

    <section>
      <h2>Use of Blog extract grid</h2>
      <div class="blog-extract-grid">
        <of-blog-extract
          title="Building UI Libraries"
          author="Mauricio Villada"
          excerpt="Learn how to design and code reusable Angular components with SCSS tokens..."
          button="Read More"
        >
        </of-blog-extract>
        <of-blog-extract
          title="Using SCSS Tokens"
          author="Mauricio Villada"
          excerpt="Learn how to use SCSS tokens to build consistent UI components..."
          button="Read More"
        >
        </of-blog-extract>
        <of-blog-extract
          title="Components in Angular"
          author="Mauricio Villada"
          excerpt="Learn how the difference between Web Components and Angular..."
          button="Read More"
        >
        </of-blog-extract>
      </div>
    </section>
  `,
  styleUrls: ["./showcase.component.scss"],
})
export class OfShowcaseComponent {}
