import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private productService: ProductService , private router: Router) {}

  ngOnInit() {}

  goToProduct() {
    this.router.navigate(['/product']);
  }
}
