import { TestBed } from '@angular/core/testing';

import { PaymentsARService } from './payments-ar.service';

describe('PaymentsARService', () => {
  let service: PaymentsARService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentsARService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
