import { TestBed } from '@angular/core/testing';

import { PaymentDocumentsService } from './payment-documents.service';

describe('PaymentDocumentsService', () => {
  let service: PaymentDocumentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentDocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
