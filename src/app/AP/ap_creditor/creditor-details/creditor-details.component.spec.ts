import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditorDetailsComponent } from './creditor-details.component';

describe('CreditorDetailsComponent', () => {
  let component: CreditorDetailsComponent;
  let fixture: ComponentFixture<CreditorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
