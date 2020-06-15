import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBankCodesComponent } from './update-bank-codes.component';

describe('UpdateBankCodesComponent', () => {
  let component: UpdateBankCodesComponent;
  let fixture: ComponentFixture<UpdateBankCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBankCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBankCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
