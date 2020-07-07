import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsreportListComponent } from './reservationsreport-list.component';

describe('ReservationsreportListComponent', () => {
  let component: ReservationsreportListComponent;
  let fixture: ComponentFixture<ReservationsreportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationsreportListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsreportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
