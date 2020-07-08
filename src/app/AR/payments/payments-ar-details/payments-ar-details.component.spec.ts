import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsARDetailsComponent } from './payments-ar-details.component';

describe('PaymentsARDetailsComponent', () => {
  let component: PaymentsARDetailsComponent;
  let fixture: ComponentFixture<PaymentsARDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsARDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsARDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
