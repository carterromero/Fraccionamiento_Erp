import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentRecordDetailsComponent } from './payment-record-details.component';

describe('PaymentRecordDetailsComponent', () => {
  let component: PaymentRecordDetailsComponent;
  let fixture: ComponentFixture<PaymentRecordDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentRecordDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentRecordDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
