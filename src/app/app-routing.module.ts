import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RazorpayPaymentComponent } from './razorpay-payment/razorpay-payment.component';
import { StripePaymentComponent } from './stripe-payment/stripe-payment.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'stripe', component: StripePaymentComponent},
    {path: 'razorpay', component: RazorpayPaymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
