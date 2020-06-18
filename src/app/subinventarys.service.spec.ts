import { TestBed } from '@angular/core/testing';

import { SubInventarysService } from './subinventarys.service';

describe('SubInventarysService', () => {
  let service: SubInventarysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubInventarysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
