import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionConceptsUpdateComponent } from './update-collectionconcepts.component';

describe('CollectionConceptsUpdateComponent', () => {
  let component: CollectionConceptsUpdateComponent;
  let fixture: ComponentFixture<CollectionConceptsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionConceptsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionConceptsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
