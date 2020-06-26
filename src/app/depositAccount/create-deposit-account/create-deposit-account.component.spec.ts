import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDepositAccountComponent } from './create-deposit-account.component';

describe('CreateDepositAccountComponent', () => {
  let component: CreateDepositAccountComponent;
  let fixture: ComponentFixture<CreateDepositAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDepositAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDepositAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
