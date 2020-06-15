import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBanksListComponent } from './manage-banks-list.component';

describe('ManageBanksListComponent', () => {
  let component: ManageBanksListComponent;
  let fixture: ComponentFixture<ManageBanksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBanksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBanksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
