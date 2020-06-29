import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitOfMeasuresListComponent } from './unit-of-measures-list.component';

describe('UnitOfMeasuresListComponent', () => {
  let component: UnitOfMeasuresListComponent;
  let fixture: ComponentFixture<UnitOfMeasuresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitOfMeasuresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitOfMeasuresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
