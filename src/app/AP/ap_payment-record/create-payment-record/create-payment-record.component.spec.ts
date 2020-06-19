import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePaymentRecordComponent } from './create-payment-record.component';

describe('CreatePaymentRecordComponent', () => {
  let component: CreatePaymentRecordComponent;
  let fixture: ComponentFixture<CreatePaymentRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePaymentRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePaymentRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
