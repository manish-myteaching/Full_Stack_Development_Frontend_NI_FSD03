// src/app/services/cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../product/product-service.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>(this.cart);

  getCartItems(): Observable<Product[]> {
    return this.cartSubject.asObservable();
  }

  addToCart(product: Product): void {
    this.cart.push(product);
    this.cartSubject.next(this.cart);
  }

  clearCart(): void {
    this.cart = [];
    this.cartSubject.next(this.cart);
  }
}
