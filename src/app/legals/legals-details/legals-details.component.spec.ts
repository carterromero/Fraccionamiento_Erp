import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalsDetailsComponent } from './legals-details.component';

describe('LegalsDetailsComponent', () => {
  let component: LegalsDetailsComponent;
  let fixture: ComponentFixture<LegalsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
