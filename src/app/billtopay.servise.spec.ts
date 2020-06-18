import { TestBed } from '@angular/core/testing';

import { BilltopayService } from './billtopay.service';

describe('BankCodesService', () => {
  let service: BilltopayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BilltopayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
  