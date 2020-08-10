import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePaymentsARComponent } from './create-payments-ar.component';

describe('CreatePaymentsARComponent', () => {
  let component: CreatePaymentsARComponent;
  let fixture: ComponentFixture<CreatePaymentsARComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePaymentsARComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePaymentsARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
