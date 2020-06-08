import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLegalsComponent } from './create-legals.component';

describe('CreateLegalsComponent', () => {
  let component: CreateLegalsComponent;
  let fixture: ComponentFixture<CreateLegalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLegalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLegalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
