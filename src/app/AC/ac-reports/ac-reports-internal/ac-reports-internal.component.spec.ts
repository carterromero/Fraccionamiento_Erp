import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcReportsInternalComponent } from './ac-reports-internal.component';

describe('AcReportsInternalComponent', () => {
  let component: AcReportsInternalComponent;
  let fixture: ComponentFixture<AcReportsInternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcReportsInternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcReportsInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
