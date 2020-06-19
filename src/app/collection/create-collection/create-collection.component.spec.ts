import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecollectionComponent } from './create-collection.component';

describe('CreateCollectionComponent', () => {
  let component: CreatecollectionComponent;
  let fixture: ComponentFixture<CreatecollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
