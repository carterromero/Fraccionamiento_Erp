import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBankCodesComponent } from './create-bank-codes.component';

describe('CreateBankCodesComponent', () => {
  let component: CreateBankCodesComponent;
  let fixture: ComponentFixture<CreateBankCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBankCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBankCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
