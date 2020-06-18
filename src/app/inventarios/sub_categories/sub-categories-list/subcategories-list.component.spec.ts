import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoriesListComponent } from './subcategories-list.component';

describe('SubCategoriesListComponent', () => {
  let component: SubCategoriesListComponent;
  let fixture: ComponentFixture<SubCategoriesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCategoriesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
