import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDepositAccountComponent } from './update-deposit-account.component';

describe('UpdateDepositAccountComponent', () => {
  let component: UpdateDepositAccountComponent;
  let fixture: ComponentFixture<UpdateDepositAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDepositAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDepositAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
