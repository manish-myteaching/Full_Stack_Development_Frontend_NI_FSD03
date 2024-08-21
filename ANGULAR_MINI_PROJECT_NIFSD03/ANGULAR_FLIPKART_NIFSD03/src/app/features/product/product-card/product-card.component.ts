// src/app/product/product-card/product-card.component.ts
import { Component, Input } from '@angular/core';
import { Product } from '../product-service.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
}
