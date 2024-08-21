// src/app/product/product.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductService } from './product-service.service';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent, ProductCardComponent],
  imports: [CommonModule, ProductRoutingModule,SharedModule],
  providers: [ProductService]
})
export class ProductModule { }
