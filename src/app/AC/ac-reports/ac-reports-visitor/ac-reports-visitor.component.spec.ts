import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcReportsVisitorComponent } from './ac-reports-visitor.component';

describe('AcReportsVisitorComponent', () => {
  let component: AcReportsVisitorComponent;
  let fixture: ComponentFixture<AcReportsVisitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcReportsVisitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcReportsVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
