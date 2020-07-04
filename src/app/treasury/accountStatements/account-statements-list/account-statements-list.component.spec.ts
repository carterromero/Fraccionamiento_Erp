import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountStatementsListComponent } from './account-statements-list.component';

describe('AccountStatementsListComponent', () => {
  let component: AccountStatementsListComponent;
  let fixture: ComponentFixture<AccountStatementsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountStatementsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountStatementsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
