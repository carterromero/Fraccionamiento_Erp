import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountStatementsDetailsComponent } from './account-statements-details.component';

describe('AccountStatementsDetailsComponent', () => {
  let component: AccountStatementsDetailsComponent;
  let fixture: ComponentFixture<AccountStatementsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountStatementsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountStatementsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
