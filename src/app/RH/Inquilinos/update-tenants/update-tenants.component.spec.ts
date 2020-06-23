import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTenantsComponent } from './update-tenants.component';

describe('UpdateTenantsComponent', () => {
  let component: UpdateTenantsComponent;
  let fixture: ComponentFixture<UpdateTenantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTenantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
