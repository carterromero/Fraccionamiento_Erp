import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAutomaticConciliationComponent } from './update-automatic-conciliation.component';

describe('UpdateAutomaticConciliationComponent', () => {
  let component: UpdateAutomaticConciliationComponent;
  let fixture: ComponentFixture<UpdateAutomaticConciliationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAutomaticConciliationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAutomaticConciliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
