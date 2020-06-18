import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubinventarysListComponent } from './subinventarys-list.component';

describe('SubinventarysListComponent', () => {
  let component: SubinventarysListComponent;
  let fixture: ComponentFixture<SubinventarysListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubinventarysListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubinventarysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
