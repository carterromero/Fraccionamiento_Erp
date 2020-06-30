import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPayrollComponent } from './details-payroll.component';

describe('DetailsPayrollComponent', () => {
  let component: DetailsPayrollComponent;
  let fixture: ComponentFixture<DetailsPayrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPayrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
