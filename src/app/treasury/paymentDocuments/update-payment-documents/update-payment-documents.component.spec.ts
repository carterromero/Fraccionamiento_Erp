import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePaymentDocumentsComponent } from './update-payment-documents.component';

describe('UpdatePaymentDocumentsComponent', () => {
  let component: UpdatePaymentDocumentsComponent;
  let fixture: ComponentFixture<UpdatePaymentDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePaymentDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePaymentDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
