import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  cardholder = "";


  

  submitApplication(cardHolderName: string, cardNumber: number, expirationMonth: string,exppirationYear: string) {
    console.log(
      `Homes application received: firstName: ${cardHolderName}, lastName: ${cardNumber}, email: ${expirationMonth}.`,
        );}


}
