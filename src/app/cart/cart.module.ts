import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './components/cart/cart.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartService } from './services/cart.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      // by default, components are private to same module
      CartComponent,
      CartSummaryComponent],

  // to use in other module, component to be exported
  exports: [ // specific to angular
    CartComponent
  ],

  providers: [
    CartService
  ]

})
export class CartModule { } // specific to ES6/JS
