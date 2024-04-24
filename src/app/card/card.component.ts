import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { CardService } from '../card.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ReactiveFormsModule,FontAwesomeModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

 

  cardService = inject(CardService)

  applyForm = new FormGroup({
    cardHolderName: new FormControl(''),
    cardNumber: new FormControl(''),
    expirationMonth: new FormControl(''),
    expirationYear: new FormControl(''),
    cvv : new FormControl('')
  });



  submitApplication() {
    this.cardService.submitApplication(
      this.applyForm.value.cardHolderName ?? '',
      this.applyForm.value.cardNumber ?? '',
      this.applyForm.value.expirationMonth ?? '',
      this.applyForm.value.expirationYear ?? '',
      this.applyForm.value.cvv ?? ''
    );
  }

}
