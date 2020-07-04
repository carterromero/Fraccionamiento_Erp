import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionConceptsDetailsComponent } from './collectionconcepts-details.component';

describe('CollectionConceptsDetailsComponent', () => {
  let component: CollectionConceptsDetailsComponent;
  let fixture: ComponentFixture<CollectionConceptsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionConceptsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionConceptsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
