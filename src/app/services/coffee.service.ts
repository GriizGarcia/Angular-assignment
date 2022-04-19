import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { Coffee} from "../models/coffee.model";

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  constructor(private http: HttpClient) { }

  url = "https://random-data-api.com/api/coffee/random_coffee";
  getAllCoffees(totalRecords: number): Observable<Coffee[]> {
      return this.http.get<Coffee[]>(`${this.url}?size=${totalRecords}`);
  }
}
