import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenRequest } from './models/TokenRequest';

@Injectable({
  providedIn: 'root'
})
export class TokenFormService {

  constructor(private http: HttpClient) {
  }

  private url: string =  "http://localhost:8080/api/v1/card-tokens"

  async submitTokenForm(token:TokenRequest): Promise<string | undefined> {
    console.log(token)
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(token)})
      return (await response.json()) ?? {};
  }
}
