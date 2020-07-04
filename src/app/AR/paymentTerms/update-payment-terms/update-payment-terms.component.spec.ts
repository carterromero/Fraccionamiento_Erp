import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePaymentTermsComponent } from './update-payment-terms.component';

describe('UpdatePaymentTermsComponent', () => {
  let component: UpdatePaymentTermsComponent;
  let fixture: ComponentFixture<UpdatePaymentTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePaymentTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePaymentTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
