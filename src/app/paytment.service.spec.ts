import { TestBed } from '@angular/core/testing';

import { PaytmentService } from './paytment.service';

describe('PaytmentService', () => {
  let service: PaytmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaytmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
