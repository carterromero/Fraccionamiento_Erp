import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { collectionListComponent } from './collection-list.component';

describe('CollectionListComponent', () => {
  let component: collectionListComponent;
  let fixture: ComponentFixture<collectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [collectionListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(collectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
