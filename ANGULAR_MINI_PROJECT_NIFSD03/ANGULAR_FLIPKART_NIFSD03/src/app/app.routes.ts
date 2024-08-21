
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
    { path: 'product', loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule) },
    { path: 'order', loadChildren: () => import('./features/order/order.module').then(m => m.OrderModule) },
    { path: 'payment', loadChildren: () => import('./features/payment/payment.module').then(m => m.PaymentModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
