import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankCodesDetailsComponent } from './bank-codes-details.component';

describe('BankCodesDetailsComponent', () => {
  let component: BankCodesDetailsComponent;
  let fixture: ComponentFixture<BankCodesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankCodesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankCodesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
