import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  // current date and time
  today: Date = new Date();

  fullName: string;
  address: string;
  email: string;
  zipcode: number;

  constructor(public cartService: CartService) { }

  ngOnInit() {
  }

  save() {
     alert (this.fullName + ', ' + this.address + ', ' + this.email);
  }
}
