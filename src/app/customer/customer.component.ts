import { Component, EventEmitter, Output } from '@angular/core';
import { Customer } from '../models/customer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

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
