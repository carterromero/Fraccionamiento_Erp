import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConciliacionARComponent } from './update-conciliacion-ar.component';

describe('UpdateConciliacionARComponent', () => {
  let component: UpdateConciliacionARComponent;
  let fixture: ComponentFixture<UpdateConciliacionARComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateConciliacionARComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateConciliacionARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
