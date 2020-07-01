import { TestBed } from '@angular/core/testing';

import { AutomaticConciliationService } from './automatic-conciliation.service';

describe('AutomaticConciliationService', () => {
  let service: AutomaticConciliationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutomaticConciliationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
