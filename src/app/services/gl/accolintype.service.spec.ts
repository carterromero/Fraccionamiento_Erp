import { TestBed } from '@angular/core/testing';

import { AccolintypeService } from './accolintype.service';

describe('AccolintypeService', () => {
  let service: AccolintypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccolintypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
