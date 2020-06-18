import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilltopayDetailsComponent } from './billtopay-details.component';

describe('BilltopayDetailsComponent', () => {
  let component: BilltopayDetailsComponent;
  let fixture: ComponentFixture<BilltopayDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilltopayDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilltopayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
