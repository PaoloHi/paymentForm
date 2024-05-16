import { Component, OnInit, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendarDays, faCoffee, faCreditCard, faHouse, faLock, faTriangleExclamation, faUser } from '@fortawesome/free-solid-svg-icons';


import {FormsModule} from '@angular/forms';

import { TokenRequest } from '../models/TokenRequest';
import { Card } from '../models/card';
import { Customer } from '../models/customer';

import { CommonModule, NgFor, NgIf, UpperCasePipe } from '@angular/common';


import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Adress } from '../models/adress';
import { NumbersValidatorsDirective } from '../validators/numbers-validators.directive';

import { Output, EventEmitter } from '@angular/core';
import { CreditCardDirective } from '../credit-card.directive';
import { RouterLink, RouterOutlet } from '@angular/router';

declare let Cleave :any
@Component({
  selector: 'app-card',
  standalone: true,
  imports: 
  [ReactiveFormsModule,FontAwesomeModule, FormsModule
    ,CommonModule,NgFor, NumbersValidatorsDirective,
    CreditCardDirective,RouterOutlet,RouterLink,
    NgIf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent  {
  //icons 

  faCoffee = faCoffee;
  faHouse = faHouse;
  faCard = faCreditCard;
  faTriangleExclamation = faTriangleExclamation
  faUser = faUser
  faCalendarDays = faCalendarDays
  falock =  faLock

  submitted =  false; 

  
  @Output() cardOutput  = new EventEmitter<Card>();
  @Output() backButton =  new EventEmitter<void>();


  returnPage (){
    this.backButton.emit();
  }

  sendCardToParent(value: Card) {
    this.submitted = true;
    value.cardNumber = value.cardNumber.replace(/\s/g, '');
    this.cardOutput.emit(value);
  }

  card : Card = {
    cardNumber : '',
    cvv: '',
    cardHolderName : '',
    expirationMonth : '', 
    expirationYear : '',
  };
  customer : Customer = {
    id : 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: {
      country: '',
      district: '',
      street2: '',
      street: '',
      city: '',
      state: '',
      postalCode: ''
    }
  };
  ip : String =  "";

  dateObj =  new Date();
  actualMonth = this.dateObj.getMonth();
  actualYearNum = this.dateObj.getFullYear() % 2000
  actualYearStr= (this.actualYearNum).toString();


  isValidExpiration = true;
  isValidHolderName = true;
  isValidCardNumber = true; 
  isValidCvv = true; 
  
  public convertToUpperCase(input: HTMLInputElement, val: string) {
    const start = input.selectionStart;
    const end = input.selectionEnd;
    
    setTimeout(() => {
      input.setSelectionRange(start, end);
    });
    return val.toUpperCase();
  }


  expMonthOpitons : Array<String> = ["01", "02","03","04","05","06","07","08","09","10","11", "12"]

  lastDigitsOfYear = this.dateObj.getFullYear() % 2000;

  expYearOpitons : Array<number>;
  
  constructor(){
    this.expYearOpitons = [0,1,2,3,4,5].map((x)=> x + this.actualYearNum)
  }



  applyForm = new FormGroup({
    cardHolderName: new FormControl(''),
    cardNumber: new FormControl(''),
    expirationMonth: new FormControl(''),
    expirationYear: new FormControl(''),
    cvv : new FormControl('')
  });


  
  submitApplication(){
    console.log(this.card)
  }

}
