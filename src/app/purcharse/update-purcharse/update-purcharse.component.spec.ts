import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePurcharseComponent } from './update-purcharse.component';

describe('UpdatePurcharseComponent', () => {
  let component: UpdatePurcharseComponent;
  let fixture: ComponentFixture<UpdatePurcharseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePurcharseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePurcharseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
