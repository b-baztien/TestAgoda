import { Injectable } from '@angular/core';
import { Cart } from '../interfaces/cart';
import { Product } from '../interfaces/product';

@Injectable()
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ];

  private cart: Cart[] = [];

  get getProducts() {
    return this.products;
  }

  get getCart() {
    return this.cart;
  }

  constructor() {}

  addToCart(product: Product) {
    let foundProduct = this.cart.find((item) => item.product.id === product.id);
    if (!foundProduct) {
      this.cart.push({ product: product, qty: 1 });
    } else {
      foundProduct.qty++;
    }
  }

  removeFromCart(product: Product) {
    let foundIndex = this.cart.findIndex(
      (item) => item.product.id === product.id
    );
    if (foundIndex === -1) return;

    this.cart[foundIndex].qty--;
    if (this.cart[foundIndex].qty <= 0) {
      this.cart.splice(foundIndex, 1);
    }
  }
}
