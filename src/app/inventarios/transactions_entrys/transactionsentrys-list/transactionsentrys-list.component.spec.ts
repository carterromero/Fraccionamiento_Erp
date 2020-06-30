import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsentrysListComponent } from './transactionsentrys-list.component';

describe('TransactionsentrysListComponent', () => {
  let component: TransactionsentrysListComponent;
  let fixture: ComponentFixture<TransactionsentrysListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsentrysListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsentrysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
