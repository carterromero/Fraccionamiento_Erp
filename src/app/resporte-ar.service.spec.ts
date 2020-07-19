import { TestBed } from '@angular/core/testing';

import { ResporteARService } from './resporte-ar.service';

describe('ResporteARService', () => {
  let service: ResporteARService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResporteARService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
