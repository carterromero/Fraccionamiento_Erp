import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSubinventarysComponent } from './update-subinventarys.component';

describe('UpdateSubinventarysComponent', () => {
  let component: UpdateSubinventarysComponent;
  let fixture: ComponentFixture<UpdateSubinventarysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSubinventarysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSubinventarysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
