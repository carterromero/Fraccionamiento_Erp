import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConciliacionARComponent } from './create-conciliacion-ar.component';

describe('CreateConciliacionARComponent', () => {
  let component: CreateConciliacionARComponent;
  let fixture: ComponentFixture<CreateConciliacionARComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateConciliacionARComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConciliacionARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
