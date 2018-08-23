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
  constructor(public cartService: CartService) { 
    console.log('Cart Comp Created');
  }

  ngOnInit() {
   
  }

  addItem() {
    this.cartService.addItem();
  }

}
