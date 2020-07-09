import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJournalsComponent } from './create-journals.component';

describe('CreateJournalsComponent', () => {
  let component: CreateJournalsComponent;
  let fixture: ComponentFixture<CreateJournalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateJournalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJournalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
