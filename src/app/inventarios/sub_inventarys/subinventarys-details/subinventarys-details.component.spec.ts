import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubinventarysDetailsComponent } from './subinventarys-details.component';

describe('SubinventarysDetailsComponent', () => {
  let component: SubinventarysDetailsComponent;
  let fixture: ComponentFixture<SubinventarysDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubinventarysDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubinventarysDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
