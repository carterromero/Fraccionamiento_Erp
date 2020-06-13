import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateManageBanksComponent } from './update-manage-banks.component';

describe('UpdateManageBanksComponent', () => {
  let component: UpdateManageBanksComponent;
  let fixture: ComponentFixture<UpdateManageBanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateManageBanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateManageBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
