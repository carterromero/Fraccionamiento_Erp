import { TestBed } from '@angular/core/testing';

import { ConciliationManualService } from './conciliation-manual.service';

describe('ConciliationManualService', () => {
  let service: ConciliationManualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConciliationManualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
