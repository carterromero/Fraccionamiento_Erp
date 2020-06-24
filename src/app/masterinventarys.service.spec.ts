import { TestBed } from '@angular/core/testing';

import { MasterInventarysService } from './masterinventarys.service';

describe('MasterInventarysService', () => {
  let service: MasterInventarysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterInventarysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
