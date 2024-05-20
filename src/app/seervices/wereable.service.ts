import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardToChose } from '../models/card-to-chose';

@Injectable({
  providedIn: 'root'
})
export class WereableService {


  constructor(private http: HttpClient) {
  }


  private url: string =  "http://localhost:8080/api/v1/customers/"


  async getCustomCards(id : number): Promise< CardToChose[] > {

    const response = await fetch(`${this.url}${id}/cards`, {
      method: 'POST'})
      return (await response.json()) ?? {};
  }


  async submitForm( value: any): Promise<boolean>{
    const response = await fetch(this.url ,{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)})
      return (await response.json()) ?? {};
  }
}
