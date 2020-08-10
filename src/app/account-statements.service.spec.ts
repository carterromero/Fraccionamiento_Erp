import { TestBed } from '@angular/core/testing';

import { AccountStatementsService } from './account-statements.service';

describe('AccountStatementsService', () => {
  let service: AccountStatementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountStatementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
