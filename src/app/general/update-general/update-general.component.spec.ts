import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGeneralComponent } from './update-general.component';

describe('UpdateGeneralComponent', () => {
  let component: UpdateGeneralComponent;
  let fixture: ComponentFixture<UpdateGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
