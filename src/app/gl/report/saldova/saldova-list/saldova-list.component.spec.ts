import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldovaListComponent } from './saldova-list.component';

describe('SaldovaListComponent', () => {
  let component: SaldovaListComponent;
  let fixture: ComponentFixture<SaldovaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaldovaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaldovaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
