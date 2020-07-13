import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTypesDetailsComponent } from './transactiontypes-details.component';

describe('TransactionTypesDetailsComponent', () => {
  let component: TransactionTypesDetailsComponent;
  let fixture: ComponentFixture<TransactionTypesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionTypesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionTypesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
