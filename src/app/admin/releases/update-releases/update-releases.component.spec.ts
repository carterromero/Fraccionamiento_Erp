import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReleasesComponent } from './update-releases.component';

describe('UpdateReleasesComponent', () => {
  let component: UpdateReleasesComponent;
  let fixture: ComponentFixture<UpdateReleasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateReleasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
