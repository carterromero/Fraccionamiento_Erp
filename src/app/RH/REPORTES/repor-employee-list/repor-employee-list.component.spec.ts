import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporEmployeeListComponent } from './repor-employee-list.component';

describe('ReporEmployeeListComponent', () => {
  let component: ReporEmployeeListComponent;
  let fixture: ComponentFixture<ReporEmployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporEmployeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
