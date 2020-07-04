import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsRListComponent } from './departmentsr-list.component';

describe('DepartmentsrListComponent', () => {
  let component: DepartmentsRListComponent;
  let fixture: ComponentFixture<DepartmentsRListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsRListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsRListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
