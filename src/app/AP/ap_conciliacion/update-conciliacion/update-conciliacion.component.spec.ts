import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConciliacionComponent } from './update-conciliacion.component';

describe('UpdateConciliacionComponent', () => {
  let component: UpdateConciliacionComponent;
  let fixture: ComponentFixture<UpdateConciliacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateConciliacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateConciliacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
