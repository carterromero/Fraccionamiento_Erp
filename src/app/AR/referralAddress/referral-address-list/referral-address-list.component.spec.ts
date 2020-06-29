import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralAddressListComponent } from './referral-address-list.component';

describe('ReferralAddressListComponent', () => {
  let component: ReferralAddressListComponent;
  let fixture: ComponentFixture<ReferralAddressListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralAddressListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralAddressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
