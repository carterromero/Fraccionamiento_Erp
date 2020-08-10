import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacpayDetailsComponent } from './facpay-details.component';



describe('BilltopayDetailsComponent', () => {
  let component: FacpayDetailsComponent;
  let fixture: ComponentFixture<FacpayDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FacpayDetailsComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacpayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
