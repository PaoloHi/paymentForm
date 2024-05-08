import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { UserComponent } from '../user/user.component';
import { Card } from '../models/card';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CardComponent,UserComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {




  cardholder = "";

  

  addItem(card: Card) {
    console.log(card);
  }



  submitApplication(cardHolderName: string, cardNumber: number, expirationMonth: string,exppirationYear: string) {
    console.log(
      `Homes application received: firstName: ${cardHolderName}, lastName: ${cardNumber}, email: ${expirationMonth}.`,
        );}


}
