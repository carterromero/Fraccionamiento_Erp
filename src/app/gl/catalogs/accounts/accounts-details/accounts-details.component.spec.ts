import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsDetailsComponent } from './accounts-details.component';

describe('AccountsDetailsComponent', () => {
  let component: AccountsDetailsComponent;
  let fixture: ComponentFixture<AccountsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
