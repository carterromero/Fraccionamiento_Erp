import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalslinDetailsComponent } from './journalslin-details.component';

describe('JournalslinDetailsComponent', () => {
  let component: JournalslinDetailsComponent;
  let fixture: ComponentFixture<JournalslinDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalslinDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalslinDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
