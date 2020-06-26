import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositAccountListComponent } from './deposit-account-list.component';

describe('DepositAccountListComponent', () => {
  let component: DepositAccountListComponent;
  let fixture: ComponentFixture<DepositAccountListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositAccountListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositAccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
