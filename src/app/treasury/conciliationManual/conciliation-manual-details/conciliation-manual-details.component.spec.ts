import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciliationManualDetailsComponent } from './conciliation-manual-details.component';

describe('ConciliationManualDetailsComponent', () => {
  let component: ConciliationManualDetailsComponent;
  let fixture: ComponentFixture<ConciliationManualDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConciliationManualDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConciliationManualDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
