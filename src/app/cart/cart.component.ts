import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cart } from '../interfaces/cart';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  carts$: Observable<Cart[]>;

  constructor(private productService: ProductService, private router: Router) {
    this.carts$ = productService.getCart;
  }

  ngOnInit() {}

  goToProduct() {
    this.router.navigate(['/product']);
  }
}
