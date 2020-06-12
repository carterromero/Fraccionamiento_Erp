import { TestBed } from '@angular/core/testing';

import { LegalsService } from './legals.service';

describe('LegalsService', () => {
  let service: LegalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
