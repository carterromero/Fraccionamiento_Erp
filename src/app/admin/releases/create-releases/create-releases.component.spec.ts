import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReleasesComponent } from './create-releases.component';

describe('CreateReleasesComponent', () => {
  let component: CreateReleasesComponent;
  let fixture: ComponentFixture<CreateReleasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReleasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
