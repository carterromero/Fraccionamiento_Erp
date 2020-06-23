import { TestBed } from '@angular/core/testing';

import { UserdashboardngService } from './userdashboardng.service';

describe('UserdashboardngService', () => {
  let service: UserdashboardngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserdashboardngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
