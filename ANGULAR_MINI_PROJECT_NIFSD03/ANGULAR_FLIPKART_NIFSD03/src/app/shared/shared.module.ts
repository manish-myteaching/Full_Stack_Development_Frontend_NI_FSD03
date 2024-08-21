// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { PriceFormat } from './price-format.pipe';

@NgModule({
  declarations: [PriceFormat, HighlightDirective],
  imports: [CommonModule],
  exports: [PriceFormat, HighlightDirective]
})
export class SharedModule { }
