import { Pipe, PipeTransform } from '@angular/core';
import {OrderView} from "../model/order-view";

@Pipe({
  name: 'filterByCustomer'
})
export class FilterByCustomerPipe implements PipeTransform {

  transform(value: OrderView[] | null, customerId: number): OrderView[] {
    if(value === null) value = [];
    return customerId == 0 ? value : value.filter( order => order.customerId == customerId) as OrderView[];
  }

}
