import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJournalsComponent } from './update-journals.component';

describe('UpdateJournalsComponent', () => {
  let component: UpdateJournalsComponent;
  let fixture: ComponentFixture<UpdateJournalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateJournalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJournalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
