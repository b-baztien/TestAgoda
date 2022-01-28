import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Cart } from '../interfaces/cart';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[];
  cart$: Observable<Cart[]>;

  constructor(private productService: ProductService, private router: Router) {
    this.products = productService.getProducts;
    this.cart$ = productService.getCart;
  }

  ngOnInit() {}

  addToCart(product: Product) {
    this.productService.addToCart(product);
  }

  removeFromCart(product: Product) {
    this.productService.removeFromCart(product);
  }

  getCartQty(product: Product) {
    return this.cart$.pipe(
      map((items) => items.find((item) => item.product.id === product.id)?.qty)
    );
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}
