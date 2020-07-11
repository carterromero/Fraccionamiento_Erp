import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcUpdateVisitorsComponent } from './ac-update-visitors.component';

describe('AcUpdateVisitorsComponent', () => {
  let component: AcUpdateVisitorsComponent;
  let fixture: ComponentFixture<AcUpdateVisitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcUpdateVisitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcUpdateVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
