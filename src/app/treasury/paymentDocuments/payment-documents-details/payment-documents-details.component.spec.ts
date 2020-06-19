import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDocumentsDetailsComponent } from './payment-documents-details.component';

describe('PaymentDocumentsDetailsComponent', () => {
  let component: PaymentDocumentsDetailsComponent;
  let fixture: ComponentFixture<PaymentDocumentsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentDocumentsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDocumentsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
