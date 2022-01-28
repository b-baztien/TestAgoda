import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Cart } from '../interfaces/cart';
import { Product } from '../interfaces/product';

@Injectable()
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Hamburger',
      price: 100,
      image: `https://e7.pngegg.com/pngimages/936/187/png-clipart-hamburger-hamburger-food.png`,
    },
    {
      id: 2,
      name: 'Pizza',
      price: 200,
      image: `https://img.lovepik.com/element/40059/4998.png_860.png`,
    },
    {
      id: 3,
      name: 'French Fries',
      price: 300,
      image: `https://www.xn--o3cdbr1ab9cle2ccb9c8gta3ivab.com/wp-content/uploads/2020/01/plate-of-french-fries-PGJ3FC4-scaled.jpg`,
    },
  ];

  private cart = new BehaviorSubject<Cart[]>([]);

  get getProducts() {
    return this.products;
  }

  get getCart() {
    return this.cart.asObservable();
  }

  constructor() {}

  addToCart(product: Product) {
    let foundProduct = this.cart.value.find(
      (item) => item.product.id === product.id
    );
    if (!foundProduct) {
      let carts = this.cart.value;
      carts.push({ product: product, qty: 1 });
      this.cart.next(carts);
    } else {
      foundProduct.qty++;
    }
  }

  removeFromCart(product: Product) {
    let foundIndex = this.cart.value.findIndex(
      (item) => item.product.id === product.id
    );
    if (foundIndex === -1) return;

    let carts = this.cart.value;
    carts[foundIndex].qty--;

    if (carts[foundIndex].qty <= 0) {
      carts.splice(foundIndex, 1);
    }
    this.cart.next(carts);
  }
}
