import { TestBed } from '@angular/core/testing';

import { Billtopayservice } from './billtopay.service';

describe('BankCodesService', () => {
  let service: Billtopayservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Billtopayservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
  