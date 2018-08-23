import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
 
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // cart service
  // Angular would create cart service, inject here
  constructor(public cartService: CartService, 
             public http: HttpClient) { 
    console.log('Cart Comp Created');
  }

  ngOnInit() {
    this.http.get("/assets/products.json")
          .subscribe( products => {
            console.log("Got products ", products);
          });
  }

  addItem() {
    this.cartService.addItem();
  }

}
