import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccolintypeComponent } from './update-accolintype.component';

describe('UpdateAccolintypeComponent', () => {
  let component: UpdateAccolintypeComponent;
  let fixture: ComponentFixture<UpdateAccolintypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAccolintypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccolintypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
