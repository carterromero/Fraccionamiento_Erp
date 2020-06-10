import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePeriodsComponent } from './update-periods.component';

describe('UpdatePeriodsComponent', () => {
  let component: UpdatePeriodsComponent;
  let fixture: ComponentFixture<UpdatePeriodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePeriodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePeriodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
