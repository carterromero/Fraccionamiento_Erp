import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTransactionTypesComponent } from './update-transactiontypes.component';

describe('UpdateTransactionTypesComponent', () => {
  let component: UpdateTransactionTypesComponent;
  let fixture: ComponentFixture<UpdateTransactionTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTransactionTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTransactionTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
