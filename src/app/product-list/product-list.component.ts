import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../cart/services/cart.service';
import { Product } from '../models/product';
import { CartItem } from '../cart/models/cart-item';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  fieldList = [ 'name', 'price' ];

  selectedField: string = 'name';
  sortField: string = 'desc';

  constructor(private productService: ProductService,
              private cartService: CartService) { }

  ngOnInit() {
    this.productService.getProducts()
        .subscribe( (result: any) => { // result is json data from server
            console.log('Result ', result);
            this.products = result.products;
        });
  }

  addToCart(product: Product) {
     const cartItem = new CartItem(product.id,
                                   product.name,
                                   product.price,
                                  1);

    this.cartService.addItemFromProduct(cartItem);
  }

}
