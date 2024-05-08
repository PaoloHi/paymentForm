import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import { TokenRequest } from '../models/TokenRequest';
import { Card } from '../models/card';
import { Customer } from '../models/customer';

import { CommonModule, NgFor, UpperCasePipe } from '@angular/common';

import { CardService } from '../card.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Adress } from '../models/adress';
import { NumbersValidatorsDirective } from '../validators/numbers-validators.directive';
import { NgxCleaveDirectiveModule } from 'ngx-cleave-directive';

import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ReactiveFormsModule,FontAwesomeModule, FormsModule
    ,CommonModule,NgFor, NumbersValidatorsDirective,
    NgxCleaveDirectiveModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  cardService = inject(CardService)
  @Output() cardOutput  = new EventEmitter<Card>();


  sendCardToParent(value: Card) {
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
      zipcode: ''
    }
  };
  ip : String =  "";


  public convertToUpperCase(input: HTMLInputElement, val: string) {
    const start = input.selectionStart;
    const end = input.selectionEnd;
    setTimeout(() => {
      input.setSelectionRange(start, end);
    });
    return val.toUpperCase();
  }


  expMonthOpitons : Array<String> = ["01", "02","03","04","05","06","07","08","09","10","11", "12"]

  actualYear = new Date().getFullYear();
  lastDigitsOfYear = this.actualYear % 2000;

  expYearOpitons : Array<number>;
  
  constructor(){
    this.expYearOpitons = [0,1,2,3,4].map((x)=> x +this.actualYear);
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
