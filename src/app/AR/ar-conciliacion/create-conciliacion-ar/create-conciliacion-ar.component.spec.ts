import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCreditorComponent } from './create-conciliacion-ar.component';

describe('CreateCreditorComponent', () => {
  let component: CreateCreditorComponent;
  let fixture: ComponentFixture<CreateCreditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCreditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCreditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
