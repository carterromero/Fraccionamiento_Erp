import { TestBed } from '@angular/core/testing';

import { ReferralAddressService } from './referral-address.service';

describe('ReferralAddressService', () => {
  let service: ReferralAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReferralAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
