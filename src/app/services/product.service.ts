import { Injectable } from '@angular/core';

// service
import {HttpClient} from '@angular/common/http';

// Ajax call
@Injectable()
export class ProductService {

  // when product service created, HttpClient also created by Angular
  // injected here
  constructor(private http: HttpClient) { }

  // call api
  getProducts() {
     return this.http.get('/assets/products.json');
  }
}
