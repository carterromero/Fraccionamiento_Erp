import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDocumentsListComponent } from './payment-documents-list.component';

describe('PaymentDocumentsListComponent', () => {
  let component: PaymentDocumentsListComponent;
  let fixture: ComponentFixture<PaymentDocumentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentDocumentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDocumentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
