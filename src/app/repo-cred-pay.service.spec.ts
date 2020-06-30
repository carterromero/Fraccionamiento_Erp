import { TestBed } from '@angular/core/testing';

import { RepoCredPayService } from './repo-cred-pay.service';

describe('RepoCredPayService', () => {
  let service: RepoCredPayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepoCredPayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
