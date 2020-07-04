import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePaymentTermsComponent } from './create-payment-terms.component';

describe('CreatePaymentTermsComponent', () => {
  let component: CreatePaymentTermsComponent;
  let fixture: ComponentFixture<CreatePaymentTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePaymentTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePaymentTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
