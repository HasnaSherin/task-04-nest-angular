import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./units/navbar/navbar.component";
import { CarouselComponent } from "./units/carousel/carousel.component";
import { AccordionComponent } from "./units/accordion/accordion.component";
import { FooterComponent } from "./units/footer/footer.component";
import { CardComponent } from "./units/card/card.component";
import { ContactComponent } from "./pages/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CarouselComponent, AccordionComponent, FooterComponent, CardComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectangular1';
}
