import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReferralAddressComponent } from './update-referral-address.component';

describe('UpdateReferralAddressComponent', () => {
  let component: UpdateReferralAddressComponent;
  let fixture: ComponentFixture<UpdateReferralAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateReferralAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReferralAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
