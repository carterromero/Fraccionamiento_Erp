import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticConciliationDetailsComponent } from './automatic-conciliation-details.component';

describe('AutomaticConciliationDetailsComponent', () => {
  let component: AutomaticConciliationDetailsComponent;
  let fixture: ComponentFixture<AutomaticConciliationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomaticConciliationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomaticConciliationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
