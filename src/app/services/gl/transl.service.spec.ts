import { TestBed } from '@angular/core/testing';

import { TranslService } from './Transl.service';

describe('TranslService', () => {
  let service: TranslService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
