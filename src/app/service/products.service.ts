import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../data/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  public GetProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:4200/api/products');
  }
}
