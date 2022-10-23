import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stripe-payment',
  templateUrl: './stripe-payment.component.html',
  styleUrls: ['./stripe-payment.component.scss']
})
export class StripePaymentComponent implements OnInit {

  paymentHandler:any = null;
  chargeAmount=0;

  constructor() { }

  ngOnInit() {
    this.invokeStripe();
  }
  
  initializePayment() {
   if(this.chargeAmount>0){
  const paymentHandler = (<any>window).StripeCheckout.configure({
      key: '', //StripeKey
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log({stripeToken})
        alert('Stripe token generated!');
      }
    });
  
    paymentHandler.open({
      name: 'Test Payment',
      description: 'Make a test payment with Stripe',
      amount: this.chargeAmount * 100
    });
   }else{
    alert("Enter amount greater than 0")
   }
  }
  
  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: '',  //StripeKey
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
          }
        });
      }
      window.document.body.appendChild(script);
    }
  }
}