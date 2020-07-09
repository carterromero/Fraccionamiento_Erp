import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalsDetailsComponent } from './journals-details.component';

describe('JournalsDetailsComponent', () => {
  let component: JournalsDetailsComponent;
  let fixture: ComponentFixture<JournalsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
