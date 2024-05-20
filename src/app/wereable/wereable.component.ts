import { Component, inject } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { WereableService } from '../seervices/wereable.service';
import { CardToChose } from '../models/card-to-chose';
import { NgFor } from '@angular/common';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { FormControl,FormGroup } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-wereable',
  standalone: true,
  imports: [NgFor,ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './wereable.component.html',
  styleUrl: './wereable.component.css'
})
export class WereableComponent {

  faCreditCard  = faCreditCard;
 
  cardnum: string = 'hey'
  service = inject(WereableService  )
  route: ActivatedRoute = inject(ActivatedRoute);

  cardsIds : number[] = []; 
  cards : string[] = [];
  cardsToChose : CardToChose[] = [{id:1,lastFour:"1232"},{id:2,lastFour:"3344"} ];



  form = new FormGroup({
    deviceId: new FormControl(),
    cardTokenId:  new FormControl(this.cardnum)
  });

  constructor(  private router: Router  ){

    this.service.getCustomCards(this.route.snapshot.params['customerId'])
   .then( ( cardToChose : CardToChose[] ) => {
    this.cardsToChose = cardToChose;
   });  
  }  

  onSubmit( ) {

    let val = this.form.value; 
    console.log(val)
    this.service.submitForm(val);
    this.router.navigate(['welcome']);
  }

}
