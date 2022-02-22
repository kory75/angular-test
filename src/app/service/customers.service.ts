import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../data/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private httpClient: HttpClient) { }

  public GetCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('http://localhost:4200/api/customers');
  }
}
