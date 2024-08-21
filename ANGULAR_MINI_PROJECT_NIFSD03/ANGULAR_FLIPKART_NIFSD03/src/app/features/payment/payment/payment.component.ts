// src/app/payment/payment/payment.component.ts
import { Component } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  amount: number = 0;

  constructor(private paymentService: PaymentService) {}

  processPayment() {
    const success = this.paymentService.processPayment(this.amount);
    if (success) {
      alert('Payment processed successfully!');
    } else {
      alert('Payment failed.');
    }
  }
}
