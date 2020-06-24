import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePaymentRecordComponent } from './update-payment-record.component';

describe('UpdatePaymentRecordComponent', () => {
  let component: UpdatePaymentRecordComponent;
  let fixture: ComponentFixture<UpdatePaymentRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePaymentRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePaymentRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
