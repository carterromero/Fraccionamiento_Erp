import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  CreatePreciosComponent } from './create-precios.component';

describe('CreatePreciosComponent', () => {
  let component: CreatePreciosComponent;
  let fixture: ComponentFixture<CreatePreciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePreciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePreciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
