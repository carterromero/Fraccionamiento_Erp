import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcVisitorsDetailsComponent } from './ac-visitors-details.component';

describe('AcVisitorsDetailsComponent', () => {
  let component: AcVisitorsDetailsComponent;
  let fixture: ComponentFixture<AcVisitorsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcVisitorsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcVisitorsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
