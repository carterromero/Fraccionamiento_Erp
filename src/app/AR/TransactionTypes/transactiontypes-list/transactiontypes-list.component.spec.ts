import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTypesListComponent } from './transactiontypes-list.component';

describe('TransactionTypesListComponent', () => {
  let component: TransactionTypesListComponent;
  let fixture: ComponentFixture<TransactionTypesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionTypesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionTypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
