import { TestBed } from '@angular/core/testing';

import { BankCodesService } from './bank-codes.service';

describe('BankCodesService', () => {
  let service: BankCodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankCodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
