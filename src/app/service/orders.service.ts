import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from "../data/order";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient: HttpClient) { }

  public GetOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>('http://localhost:4200/api/orders');
  }
}
