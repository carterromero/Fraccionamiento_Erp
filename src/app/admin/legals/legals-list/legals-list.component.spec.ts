import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalsListComponent } from './legals-list.component';

describe('LegalsListComponent', () => {
  let component: LegalsListComponent;
  let fixture: ComponentFixture<LegalsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
