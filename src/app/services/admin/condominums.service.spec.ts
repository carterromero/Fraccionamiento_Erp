import { TestBed } from '@angular/core/testing';

import { CondominumsService } from './condominums.service';

describe('CondominumsService', () => {
  let service: CondominumsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CondominumsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
