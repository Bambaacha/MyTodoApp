import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChucknorrisService {

  constructor(private httpClient: HttpClient) { }

  getJoke() {
    return this.httpClient.get<Joke>('https://api.chucknorris.io/jokes/random?category=dev');
  }
}

export interface Joke {
  category: string[];
  icon_url: string;
  id: string;
  url: string;
  value: string;
}
