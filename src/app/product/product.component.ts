import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Cart } from '../interfaces/cart';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[];
  cart: Cart[];

  productId = new Subject<number>();
  cartFromId$: Observable<Cart>;

  constructor(private productService: ProductService, private router: Router) {
    // this.products = productService.getProducts;
    // this.cart = productService.getCart;
    // this.cartFromId$ = this.productId.pipe(
    //   map((id) => this.cart.find((item) => item.id === id))
    // );
  }

  ngOnInit() {}

  addToCart(product: Product) {
    // this.productService.addToCart(product);
  }

  removeFromCart(product: Product) {
    // this.productService.removeFromCart(product);
  }

  getCartQty(id: number) {
    // return this.cart.find((item) => item.id === id)?.qty;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}
