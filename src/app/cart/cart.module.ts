 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './components/cart/cart.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartService } from './services/cart.service';

import {FormsModule} from '@angular/forms';

// feature module, group of cart/checkout specific components
import {Routes, RouterModule} from '@angular/router';
const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent
  }
  // more cart specific components route here
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // sub modules, use forChild
    RouterModule.forChild(routes) // apply routes to angular
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
