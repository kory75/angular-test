// @ts-ignore
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {forkJoin, Observable} from "rxjs";
import {CustomersService} from "./service/customers.service";
import {Customer} from "./data/customer";
import {OrdersService} from "./service/orders.service";
import {map} from "rxjs/operators";
import {OrderView} from "./model/order-view";
import {ProductsService} from "./service/products.service";

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <select id="contactMethod"
            class="form-control"
            [(ngModel)]="selectedCustomer">
      <!-- 2. TODO implement a select to filter orders by customer name -->
      <option [value]="0"> ---- Show All ---- </option>
      <option *ngFor="let customer of customers$ | async"  [value]="customer.id">{{customer.name}}</option>
    </select>

    <table>
      <thead>
        <th>Order Id</th>
        <th>Customer Name</th>
        <th>Order Date</th>
        <th>Product Name</th>
      </thead>
      <tbody>
        <!-- 1. TODO display a list of orders here. -->

        <tr *ngFor="let order of orderView$ | async | filterByCustomer: selectedCustomer">
          <td>{{order.id}}</td>
          <td >{{order.customerName}}</td>
          <td>{{order.date | date }}</td>
          <td >{{order.productName}}</td>
        </tr>

      </tbody>
    </table>
  `,
})
export class AppComponent implements OnInit {

  public selectedCustomer: number = 0;
  customers$: Observable<Customer[]> = new Observable<Customer[]>();
  orderView$: Observable<OrderView[]> = new Observable<OrderView[]>();

  constructor(private ordersService: OrdersService,
              private customerService: CustomersService,
              private productService: ProductsService) {
  }

  ngOnInit() : void {
    this.GetCustomers();
    this.GetOrderView();
  }

  public GetCustomers () : void {
     this.customers$ = this.customerService.GetCustomers();
  }

  public GetOrderView(): void {
    this.orderView$ =  forkJoin({
        orders: this.ordersService.GetOrders(),
        customers: this.customers$,
        products: this.productService.GetProducts() }
    ) . pipe(
      map(data => {
        let orderView : OrderView[] = [];
        data.orders.forEach( order => {
          orderView.push( {
            id: order.id,
            date: order.date,
            customerId: order.customerId,
            customerName: data.customers.find( customer => customer.id === order.customerId)?.name as string,
            productId: order.productId,
            productName: data.products.find( product => product.id === order.productId)?.name as string,
          })
        });
        return orderView;
    })
    );
  }
}
