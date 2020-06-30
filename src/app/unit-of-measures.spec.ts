import { TestBed } from '@angular/core/testing';
import { UnitOfMeasuresService } from './unit-of-measures.service ';


describe('UnitOfMeasuresService', () => {
  let service: UnitOfMeasuresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitOfMeasuresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
