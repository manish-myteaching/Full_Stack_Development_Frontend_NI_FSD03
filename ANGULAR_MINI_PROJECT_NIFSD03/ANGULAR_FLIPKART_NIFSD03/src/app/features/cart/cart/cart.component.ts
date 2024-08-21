// src/app/cart/cart.component.ts
import { Component, OnInit } from '@angular/core';
import { Product } from '../../product/product-service.service';
import { CartService } from '../car.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }
}
