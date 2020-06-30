import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUnitOfMeasuresComponent } from './update-unit-of-measures.component';

describe('UpdateUnitOfMeasuresComponent', () => {
  let component: UpdateUnitOfMeasuresComponent;
  let fixture: ComponentFixture<UpdateUnitOfMeasuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUnitOfMeasuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUnitOfMeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
