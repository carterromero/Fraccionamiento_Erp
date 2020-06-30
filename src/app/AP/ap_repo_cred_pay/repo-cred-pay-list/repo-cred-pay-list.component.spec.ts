import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoCredPayListComponent } from './repo-cred-pay-list.component';

describe('RepoCredPayListComponent', () => {
  let component: RepoCredPayListComponent;
  let fixture: ComponentFixture<RepoCredPayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoCredPayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoCredPayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
