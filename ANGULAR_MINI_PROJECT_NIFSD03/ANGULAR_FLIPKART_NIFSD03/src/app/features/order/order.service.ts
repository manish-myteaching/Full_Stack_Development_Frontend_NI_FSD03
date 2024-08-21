// src/app/order/order.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product/product-service.service';


export interface Order {
  id: number;
  product: Product;
  quantity: number;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [];
  private ordersSubject = new BehaviorSubject<Order[]>(this.orders);
  public orders$ = this.ordersSubject.asObservable();

  placeOrder(product: Product, quantity: number) {
    const newOrder: Order = {
      id: this.orders.length + 1,
      product: product,
      quantity: quantity,
      total: product.price * quantity
    };
    this.orders.push(newOrder);
    this.ordersSubject.next(this.orders);
    return this.ordersSubject;
  }

  getOrderById(id: number) {
    return this.orders.find(o => o.id === id);
  }
}
