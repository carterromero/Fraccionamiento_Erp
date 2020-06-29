import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReferralAddressComponent } from './create-referral-address.component';

describe('CreateReferralAddressComponent', () => {
  let component: CreateReferralAddressComponent;
  let fixture: ComponentFixture<CreateReferralAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReferralAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReferralAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
