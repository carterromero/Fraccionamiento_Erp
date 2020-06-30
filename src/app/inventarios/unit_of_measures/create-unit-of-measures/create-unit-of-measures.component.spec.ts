import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUnitOfMeasuresComponent } from './create-unit-of-measures.component';

describe('CreateUnitOfMeasuresComponent', () => {
  let component: CreateUnitOfMeasuresComponent;
  let fixture: ComponentFixture<CreateUnitOfMeasuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUnitOfMeasuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUnitOfMeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
