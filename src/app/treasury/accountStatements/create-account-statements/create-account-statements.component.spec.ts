import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountStatementsComponent } from './create-account-statements.component';

describe('CreateAccountStatementsComponent', () => {
  let component: CreateAccountStatementsComponent;
  let fixture: ComponentFixture<CreateAccountStatementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountStatementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
