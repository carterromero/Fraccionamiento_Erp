import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionConceptsCreateComponent } from './create-collectionconcepts.component';

describe('CollectionConceptsCreateComponent', () => {
  let component: CollectionConceptsCreateComponent;
  let fixture: ComponentFixture<CollectionConceptsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionConceptsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionConceptsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
