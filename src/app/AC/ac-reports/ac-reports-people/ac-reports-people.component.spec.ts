import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcReportsPeopleComponent } from './ac-reports-people.component';

describe('AcReportsPeopleComponent', () => {
  let component: AcReportsPeopleComponent;
  let fixture: ComponentFixture<AcReportsPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcReportsPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcReportsPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
