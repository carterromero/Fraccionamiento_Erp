import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilltopayListComponent } from './billtopay-list.component';

describe('BilltopayListComponent', () => {
  let component: BilltopayListComponent;
  let fixture: ComponentFixture<BilltopayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilltopayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilltopayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
