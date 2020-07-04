import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionConceptsListComponent } from './collectionconcepts-list.component';

describe('CollectionConceptsListComponent', () => {
  let component: CollectionConceptsListComponent;
  let fixture: ComponentFixture<CollectionConceptsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionConceptsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionConceptsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
