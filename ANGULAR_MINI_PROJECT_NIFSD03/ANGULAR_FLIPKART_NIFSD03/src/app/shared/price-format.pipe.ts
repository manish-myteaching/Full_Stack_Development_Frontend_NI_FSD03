// src/app/shared/price-format.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat'
})
export class PriceFormat implements PipeTransform {
  transform(value: number | null): string {
    if (value == null) return '';
    return `$${value.toFixed(2)}`;
  }
}
