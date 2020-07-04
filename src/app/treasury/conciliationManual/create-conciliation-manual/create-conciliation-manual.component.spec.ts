import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConciliationManualComponent } from './create-conciliation-manual.component';

describe('CreateConciliationManualComponent', () => {
  let component: CreateConciliationManualComponent;
  let fixture: ComponentFixture<CreateConciliationManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateConciliationManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConciliationManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
