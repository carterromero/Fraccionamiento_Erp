import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConciliationManualComponent } from './update-conciliation-manual.component';

describe('UpdateConciliationManualComponent', () => {
  let component: UpdateConciliationManualComponent;
  let fixture: ComponentFixture<UpdateConciliationManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateConciliationManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateConciliationManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
