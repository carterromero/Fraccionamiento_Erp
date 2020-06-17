import { TestBed } from '@angular/core/testing';

import { ManageBanksService } from './manage-banks.service';

describe('ManageBanksService', () => {
  let service: ManageBanksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageBanksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
