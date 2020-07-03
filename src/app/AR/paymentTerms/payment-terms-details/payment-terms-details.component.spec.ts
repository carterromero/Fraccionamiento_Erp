import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTermsDetailsComponent } from './payment-terms-details.component';

describe('PaymentTermsDetailsComponent', () => {
  let component: PaymentTermsDetailsComponent;
  let fixture: ComponentFixture<PaymentTermsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentTermsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentTermsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
