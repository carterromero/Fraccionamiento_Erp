import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWorkplacesComponent } from './update-workplaces.component';

describe('UpdateWorkplacesComponent', () => {
  let component: UpdateWorkplacesComponent;
  let fixture: ComponentFixture<UpdateWorkplacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWorkplacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWorkplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
