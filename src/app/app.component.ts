import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormComponent } from './form/form.component';
import { CardComponent } from './card/card.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,FormComponent,CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'paymentForm';
}
