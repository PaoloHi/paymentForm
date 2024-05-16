import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Customer } from '../models/customer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { faCity, faEnvelope, faPhone, faStreetView, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PhoneDirective } from '../phone.directive';


declare let Cleave: any;

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, PhoneDirective,
    FontAwesomeModule,CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent  {

  faUser =  faUser 
  faEnvelope  = faEnvelope;
  faPhone =  faPhone;
  faStreet = faStreetView;
  faCity = faCity;



  @Output() customerOutput = new EventEmitter<Customer>();

  public sendCustomerToParent ( value: Customer){
      this.customerOutput.emit(value)
   }


  customer : Customer = {
    id : 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: {
      country: '',
      district: '',
      street: '',
      street2: '',
      city: '',
      state: '',
      postalCode: ''
    }
  };


}
