import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoCredPayContListComponent } from './repo-cred-pay-cont-list.component';

describe('RepoCredPayContListComponent', () => {
  let component: RepoCredPayContListComponent;
  let fixture: ComponentFixture<RepoCredPayContListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoCredPayContListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoCredPayContListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
