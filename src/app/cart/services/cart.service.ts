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

  amount: number = 0;
  totalItems: number = 0;

  constructor() { 
    console.log('CartService created');
  }

  private calculate() {
    this.amount = 0;
    this.totalItems = 0;

    for (let item of this.cartItems) {
      this.amount += item.price * item.qty;
      this.totalItems += item.qty;
    }
  }

  addItem() {
    let id = Math.ceil(Math.random() * 1000);
    let cartItem = new CartItem(id,
                                'Product ' + id,
                                 100,
                                1);

    this.cartItems.push(cartItem);
    
    this.calculate();
  }

  addItemFromProduct(item: CartItem) {
    this.cartItems.push(item);
    this.calculate();
  }

}
