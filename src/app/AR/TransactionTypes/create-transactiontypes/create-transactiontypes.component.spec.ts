import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTransactionTypesComponent } from './create-transactiontypes.component';

describe('CreateTransactionTypesComponent', () => {
  let component: CreateTransactionTypesComponent;
  let fixture: ComponentFixture<CreateTransactionTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTransactionTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTransactionTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
