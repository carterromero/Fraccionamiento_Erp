import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralAddressDetailsComponent } from './referral-address-details.component';

describe('ReferralAddressDetailsComponent', () => {
  let component: ReferralAddressDetailsComponent;
  let fixture: ComponentFixture<ReferralAddressDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralAddressDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralAddressDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
