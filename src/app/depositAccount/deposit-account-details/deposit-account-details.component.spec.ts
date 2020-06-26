import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositAccountDetailsComponent } from './deposit-account-details.component';

describe('DepositAccountDetailsComponent', () => {
  let component: DepositAccountDetailsComponent;
  let fixture: ComponentFixture<DepositAccountDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositAccountDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
