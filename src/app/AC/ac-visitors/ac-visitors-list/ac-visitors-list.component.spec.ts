import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcVisitorsListComponent } from './ac-visitors-list.component';

describe('AcVisitorsListComponent', () => {
  let component: AcVisitorsListComponent;
  let fixture: ComponentFixture<AcVisitorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcVisitorsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcVisitorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
