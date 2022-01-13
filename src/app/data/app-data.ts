import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Customer, createCustomerData } from './customer';
import { createOrderData, Order } from './order';
import { createProductData, Product } from './product';

export class AppData implements InMemoryDbService {
  createDb(): { products: Product[]; orders: Order[]; customers: Customer[] } {
    return {
      customers: createCustomerData(),
      orders: createOrderData(),
      products: createProductData(),
    };
  }
}
