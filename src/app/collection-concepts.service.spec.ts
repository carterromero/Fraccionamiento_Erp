import { TestBed } from '@angular/core/testing';

import { CollectionConceptsService } from './collection-concepts.service';

describe('CollectionConceptsService', () => {
  let service: CollectionConceptsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionConceptsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
