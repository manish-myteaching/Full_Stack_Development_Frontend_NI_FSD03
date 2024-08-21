// src/app/order/order-placement/order-placement.component.ts
import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { Product } from '../../product/product-service.service';
import { CartService } from '../../cart/car.service';
import { Order, OrderService } from '../order.service';


@Component({
  selector: 'app-order-placement',
  templateUrl: './order-placement.component.html',
  styleUrls: ['./order-placement.component.css']
})
export class OrderPlacementComponent implements OnInit {
  product!: Product ;
  cartItems: Product[] = [];
  address: string = '';
  isSubmitting = false;
  errorMessage: string | null = null;
  successMessage: string | null = null;
  quantity!:number;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
    });
  }

  placeOrder(): void {
    this.isSubmitting = true;
    this.errorMessage = null;
    this.successMessage = null;

    this.orderService.placeOrder(this.product,this.quantity).subscribe(
      response => {
        this.isSubmitting = false;
        this.successMessage = 'Order placed successfully!';
        this.cartService.clearCart();
        this.router.navigate(['/order-confirmation']);
      },
      error => {
        this.isSubmitting = false;
        this.errorMessage = 'An error occurred while placing the order. Please try again.';
        console.error('Order placement error', error);
      }
    );
  }
}
