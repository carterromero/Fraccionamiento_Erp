import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinesDetailsComponent } from './lines-details.component';

describe('LinesDetailsComponent', () => {
  let component: LinesDetailsComponent;
  let fixture: ComponentFixture<LinesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
