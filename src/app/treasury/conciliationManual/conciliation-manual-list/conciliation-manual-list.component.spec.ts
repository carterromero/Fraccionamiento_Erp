import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciliationManualListComponent } from './conciliation-manual-list.component';

describe('ConciliationManualListComponent', () => {
  let component: ConciliationManualListComponent;
  let fixture: ComponentFixture<ConciliationManualListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConciliationManualListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConciliationManualListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
