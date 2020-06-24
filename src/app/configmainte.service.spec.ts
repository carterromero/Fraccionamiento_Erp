import { TestBed } from '@angular/core/testing';

import { ConfigmainteService } from './configmainte.service';

describe('ConfigmainteService', () => {
  let service: ConfigmainteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigmainteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
