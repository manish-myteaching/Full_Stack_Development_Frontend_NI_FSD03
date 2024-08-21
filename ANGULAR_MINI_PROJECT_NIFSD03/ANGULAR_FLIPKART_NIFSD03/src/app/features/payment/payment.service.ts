// src/app/payment/payment.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  processPayment(amount: number): boolean {
    // Dummy logic for payment processing
    console.log(`Processing payment of ${amount}`);
    return true; // Assume payment succeeds
  }
}
