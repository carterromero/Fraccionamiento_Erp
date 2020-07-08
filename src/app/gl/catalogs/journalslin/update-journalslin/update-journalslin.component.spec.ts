import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJournalslinComponent } from './update-journalslin.component';

describe('UpdateJournalslinComponent', () => {
  let component: UpdateJournalslinComponent;
  let fixture: ComponentFixture<UpdateJournalslinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateJournalslinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJournalslinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
