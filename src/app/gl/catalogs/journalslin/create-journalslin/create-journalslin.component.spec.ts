import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJournalslinComponent } from './create-journalslin.component';

describe('CreateJournalslinComponent', () => {
  let component: CreateJournalslinComponent;
  let fixture: ComponentFixture<CreateJournalslinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateJournalslinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJournalslinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
