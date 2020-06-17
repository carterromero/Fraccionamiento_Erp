import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankCodesListComponent } from './bank-codes-list.component';

describe('BankCodesListComponent', () => {
  let component: BankCodesListComponent;
  let fixture: ComponentFixture<BankCodesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankCodesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankCodesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
