import { TestBed } from '@angular/core/testing';

import { JournalslinService } from './journalslin.service';

describe('JournalsService', () => {
  let service: JournalslinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JournalslinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});