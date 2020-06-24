import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentRecordListComponent } from './payment-record-list.component';

describe('PaymentRecordListComponent', () => {
  let component: PaymentRecordListComponent;
  let fixture: ComponentFixture<PaymentRecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentRecordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
