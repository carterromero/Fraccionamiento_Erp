import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportEmployeeListComponent } from './reportemployee-list.component';

describe('ReporEmployeeListComponent', () => {
  let component: ReportEmployeeListComponent;
  let fixture: ComponentFixture<ReporEmployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportEmployeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
