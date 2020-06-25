import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoCredPayVencontListComponent } from './repo-cred-pay-vencont-list.component';

describe('RepoCredPayVencontListComponent', () => {
  let component: RepoCredPayVencontListComponent;
  let fixture: ComponentFixture<RepoCredPayVencontListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoCredPayVencontListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoCredPayVencontListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
