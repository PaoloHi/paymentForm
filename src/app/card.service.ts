import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class  CardService {

  constructor() { }



  submitApplication(cardHolderName: string, cardNumber: string, expirationMonth: string, expirationYear: string, cvv:  string) {
    console.log(
      `Homes application received: firstName: ${cardHolderName}, lastName: ${cardNumber}, email: ${cvv}.`
    );
  }

}
