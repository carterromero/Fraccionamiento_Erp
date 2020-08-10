import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalslinListComponent } from './journalslin-list.component';

describe('JournalslinListComponent', () => {
  let component: JournalslinListComponent;
  let fixture: ComponentFixture<JournalslinListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalslinListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalslinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
