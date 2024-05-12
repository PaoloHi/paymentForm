import { Component, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../models/card';
import { CustomerComponent } from '../customer/customer.component';
import { Customer } from '../models/customer';
import { TokenRequest } from '../models/TokenRequest';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { TokenFormService } from '../token-form.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CardComponent,CustomerComponent, NgIf, NgClass,
    CommonModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  
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
    let  response = await this.TokenFormService.submitTokenForm(this.token);
    console.log(response);
  }


}
