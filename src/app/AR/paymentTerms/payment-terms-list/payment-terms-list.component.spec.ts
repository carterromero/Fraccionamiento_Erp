import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTermsListComponent } from './payment-terms-list.component';

describe('PaymentTermsListComponent', () => {
  let component: PaymentTermsListComponent;
  let fixture: ComponentFixture<PaymentTermsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentTermsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentTermsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
