import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditorListComponent } from './creditor-list.component';

describe('CreditorListComponent', () => {
  let component: CreditorListComponent;
  let fixture: ComponentFixture<CreditorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
