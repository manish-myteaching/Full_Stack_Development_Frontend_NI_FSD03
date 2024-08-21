// src/app/product/product.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product 1', price: 100, description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', price: 200, description: 'Description for Product 2' }
  ];

  private productsSubject = new BehaviorSubject<Product[]>(this.products);
  public products$ = this.productsSubject.asObservable();

  getProducts() {
    return this.products$;
  }

  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }

  addProduct(product: Product) {
    this.products.push(product);
    this.productsSubject.next(this.products);
  }

  updateProduct(updatedProduct: Product) {
    const index = this.products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
      this.productsSubject.next(this.products);
    }
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
    this.productsSubject.next(this.products);
  }
}
