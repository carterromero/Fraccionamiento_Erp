import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTenantsComponent } from './create-tenants.component';

describe('CreateTenantsComponent', () => {
  let component: CreateTenantsComponent;
  let fixture: ComponentFixture<CreateTenantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTenantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
