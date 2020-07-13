import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLinesComponent } from './update-lines.component';

describe('UpdateLinesComponent', () => {
  let component: UpdateLinesComponent;
  let fixture: ComponentFixture<UpdateLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
