import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrrollkeysListComponent } from './payrrollkeys-list.component';

describe('PayrrollkeysListComponent', () => {
  let component: PayrrollkeysListComponent;
  let fixture: ComponentFixture<PayrrollkeysListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrrollkeysListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrrollkeysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
