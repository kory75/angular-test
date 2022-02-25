import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import { Order } from "../data/order";
import {map} from "rxjs/operators";
import {OrderView} from "../model/order-view";
import {Customer} from "../data/customer";
import {Product} from "../data/product";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient: HttpClient) { }

  public GetOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>('http://localhost:4200/api/orders');
  }

  public GetOrderView(): Observable<OrderView[]> {
    return forkJoin({
      orders: this.httpClient.get<Order[]>('http://localhost:4200/api/orders'),
      customers: this.httpClient.get<Customer[]>('http://localhost:4200/api/customers'),
      products: this.httpClient.get<Product[]>('http://localhost:4200/api/products'),
      }
    ) . pipe(
      map(data => {
        return data.orders.map( order => {
          return {
            id: order.id,
            date: order.date,
            customerId: order.customerId,
            customerName: data.customers.find( customer => customer.id === order.customerId)?.name as string,
            productId: order.productId,
            productName: data.products.find( product => product.id === order.productId)?.name as string,
          }
        })
      })
    );
  }
}
