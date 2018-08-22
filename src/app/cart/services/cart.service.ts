import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

// business logic
// web service/ajax
// having data, sharing with components
// singleton - only one instance
@Injectable()
export class CartService {

  // [] is JavaScript Array
  cartItems: CartItem[] = [];

  constructor() { 
    console.log('CartService created');
  }

  addItem() {
    let id = Math.ceil(Math.random() * 1000);
    let cartItem = new CartItem(id,
                                'Product ' + id,
                                 100,
                                1);

    this.cartItems.push(cartItem);
  }
}
