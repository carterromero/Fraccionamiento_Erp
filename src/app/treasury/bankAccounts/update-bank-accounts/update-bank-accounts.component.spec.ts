import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBankAccountsComponent } from './update-bank-accounts.component';

describe('UpdateBankAccountsComponent', () => {
  let component: UpdateBankAccountsComponent;
  let fixture: ComponentFixture<UpdateBankAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBankAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBankAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
