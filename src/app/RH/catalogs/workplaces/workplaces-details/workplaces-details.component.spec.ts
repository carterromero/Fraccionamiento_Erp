import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplacesDetailsComponent } from './workplaces-details.component';

describe('WorkplacesDetailsComponent', () => {
  let component: WorkplacesDetailsComponent;
  let fixture: ComponentFixture<WorkplacesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkplacesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplacesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
