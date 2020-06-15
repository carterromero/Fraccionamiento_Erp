import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateManageBanksComponent } from './create-manage-banks.component';

describe('CreateManageBanksComponent', () => {
  let component: CreateManageBanksComponent;
  let fixture: ComponentFixture<CreateManageBanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateManageBanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateManageBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
