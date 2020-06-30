import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoCredPayNocontListComponent } from './repo-cred-pay-nocont-list.component';

describe('RepoCredPayNocontListComponent', () => {
  let component: RepoCredPayNocontListComponent;
  let fixture: ComponentFixture<RepoCredPayNocontListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoCredPayNocontListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoCredPayNocontListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
