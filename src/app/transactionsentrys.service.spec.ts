import { TestBed } from '@angular/core/testing';

import { TransactionsEntrysService } from './transactionsentrys.service';

describe('TransactionsEntrysService', () => {
  let service: TransactionsEntrysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionsEntrysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
