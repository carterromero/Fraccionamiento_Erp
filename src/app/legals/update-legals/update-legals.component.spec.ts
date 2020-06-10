import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLegalsComponent } from './update-legals.component';

describe('UpdateLegalsComponent', () => {
  let component: UpdateLegalsComponent;
  let fixture: ComponentFixture<UpdateLegalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLegalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLegalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
