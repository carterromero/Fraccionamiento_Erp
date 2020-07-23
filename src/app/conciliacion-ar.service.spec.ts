import { TestBed } from '@angular/core/testing';

import { ConciliacionARService } from './conciliacion-ar.service';

describe('ConciliacionARService', () => {
  let service: ConciliacionARService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConciliacionARService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
