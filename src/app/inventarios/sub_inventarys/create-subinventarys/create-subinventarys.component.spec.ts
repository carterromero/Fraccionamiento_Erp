import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubinventarysComponent } from './create-subinventarys.component';

describe('CreateSubinventarysComponent', () => {
  let component: CreateSubinventarysComponent;
  let fixture: ComponentFixture<CreateSubinventarysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSubinventarysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubinventarysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
