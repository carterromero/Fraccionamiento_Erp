import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitOfMeasuresDetailsComponent } from './unit-of-measures-details.component';

describe('UnitOfMeasuresDetailsComponent', () => {
  let component: UnitOfMeasuresDetailsComponent;
  let fixture: ComponentFixture<UnitOfMeasuresDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitOfMeasuresDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitOfMeasuresDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
