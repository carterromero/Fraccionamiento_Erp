import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePaymentsARComponent } from './update-payments-ar.component';

describe('UpdatePaymentsARComponent', () => {
  let component: UpdatePaymentsARComponent;
  let fixture: ComponentFixture<UpdatePaymentsARComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePaymentsARComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePaymentsARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
