import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkplacesComponent } from './create-workplaces.component';

describe('CreateWorkplacesComponent', () => {
  let component: CreateWorkplacesComponent;
  let fixture: ComponentFixture<CreateWorkplacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWorkplacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWorkplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
