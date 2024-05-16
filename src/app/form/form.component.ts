import { Component, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../models/card';
import { CustomerComponent } from '../customer/customer.component';
import { Customer } from '../models/customer';
import { TokenRequest } from '../models/TokenRequest';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { TokenFormService } from '../token-form.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CardComponent,CustomerComponent, WelcomeComponent,
     NgIf, NgClass,
    CommonModule, RouterOutlet,RouterOutlet
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  

  submitted = false;
  isFirstPage : boolean = false;  
  TokenFormService = inject(TokenFormService);

  public changePage(){
    this.isFirstPage = !this.isFirstPage;    
  }
  token : TokenRequest  = {
    card : undefined,
    customer :undefined,
    ip : "111.111.111.111",

 
  }
  addCard(card: Card) {
    this.token.card = card;
    console.log(this.token.card);
    this.submitForm();
  }

  addCustomer( customer: Customer){
    this.token.customer = customer;
    this.isFirstPage = !this.isFirstPage;    
    console.log(this.token.customer)
  }
  constructor(){

  }


  async submitForm() {
    this.submitted = true;
    let  response = await this.TokenFormService.submitTokenForm(this.token);
    console.log(response);
  }


}
