import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazorpayPaymentComponent } from './razorpay-payment.component';

describe('RazorpayPaymentComponent', () => {
  let component: RazorpayPaymentComponent;
  let fixture: ComponentFixture<RazorpayPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RazorpayPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RazorpayPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
