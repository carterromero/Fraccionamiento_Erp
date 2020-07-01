import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticConciliationListComponent } from './automatic-conciliation-list.component';

describe('AutomaticConciliationListComponent', () => {
  let component: AutomaticConciliationListComponent;
  let fixture: ComponentFixture<AutomaticConciliationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomaticConciliationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomaticConciliationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
