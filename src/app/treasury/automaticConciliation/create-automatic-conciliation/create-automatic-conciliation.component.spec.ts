import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAutomaticConciliationComponent } from './create-automatic-conciliation.component';

describe('CreateAutomaticConciliationComponent', () => {
  let component: CreateAutomaticConciliationComponent;
  let fixture: ComponentFixture<CreateAutomaticConciliationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAutomaticConciliationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAutomaticConciliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
