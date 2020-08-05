import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasesDetailsComponent } from './releases-details.component';

describe('ReleasesDetailsComponent', () => {
  let component: ReleasesDetailsComponent;
  let fixture: ComponentFixture<ReleasesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleasesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleasesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
