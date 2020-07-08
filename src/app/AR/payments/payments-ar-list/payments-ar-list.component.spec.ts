import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsARListComponent } from './payments-ar-list.component';

describe('PaymentsARListComponent', () => {
  let component: PaymentsARListComponent;
  let fixture: ComponentFixture<PaymentsARListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsARListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsARListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
