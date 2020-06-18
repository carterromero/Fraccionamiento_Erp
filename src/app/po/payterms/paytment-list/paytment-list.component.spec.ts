import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaytmentListComponent } from './paytment-list.component';

describe('PaytmentListComponent', () => {
  let component: PaytmentListComponent;
  let fixture: ComponentFixture<PaytmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaytmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaytmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
