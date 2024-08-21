// src/app/order/order-list/order-list.component.ts
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.orders$.subscribe(orders => this.orders = orders);
  }
}
