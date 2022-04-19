import { Injectable } from '@angular/core';
import { Coffee } from '../models/coffee.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDetailsService {
  coffee!: Coffee;
  constructor() { }

  public getDetails(): Coffee{
    return this.coffee;
  }

  public setDetails(coffee: Coffee){
    this.coffee = coffee;
  }
}
