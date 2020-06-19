import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePaymentDocumentsComponent } from './create-payment-documents.component';

describe('CreatePaymentDocumentsComponent', () => {
  let component: CreatePaymentDocumentsComponent;
  let fixture: ComponentFixture<CreatePaymentDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePaymentDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePaymentDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
