import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancereportDetailsComponent } from './balancereport-details.component';

describe('BalancereportDetailsComponent', () => {
  let component: BalancereportDetailsComponent;
  let fixture: ComponentFixture<BalancereportDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalancereportDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalancereportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
