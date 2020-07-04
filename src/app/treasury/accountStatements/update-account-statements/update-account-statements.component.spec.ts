import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccountStatementsComponent } from './update-account-statements.component';

describe('UpdateAccountStatementsComponent', () => {
  let component: UpdateAccountStatementsComponent;
  let fixture: ComponentFixture<UpdateAccountStatementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAccountStatementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccountStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
