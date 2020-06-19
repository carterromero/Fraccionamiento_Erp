import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdashboardDetailsComponent } from './userdashboard-details.component';

describe('UserdashboardDetailsComponent', () => {
  let component: UserdashboardDetailsComponent;
  let fixture: ComponentFixture<UserdashboardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdashboardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdashboardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
