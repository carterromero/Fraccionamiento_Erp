import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcCreateVisitorsComponent } from './ac-create-visitors.component';

describe('AcCreateVisitorsComponent', () => {
  let component: AcCreateVisitorsComponent;
  let fixture: ComponentFixture<AcCreateVisitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcCreateVisitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcCreateVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
