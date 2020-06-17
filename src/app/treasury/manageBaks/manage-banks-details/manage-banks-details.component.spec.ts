import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBanksDetailsComponent } from './manage-banks-details.component';

describe('ManageBanksDetailsComponent', () => {
  let component: ManageBanksDetailsComponent;
  let fixture: ComponentFixture<ManageBanksDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBanksDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBanksDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
