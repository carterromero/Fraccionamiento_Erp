import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcUpdateTenantsComponent } from './ac-update-tenants.component';

describe('AcUpdateTenantsComponent', () => {
  let component: AcUpdateTenantsComponent;
  let fixture: ComponentFixture<AcUpdateTenantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcUpdateTenantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcUpdateTenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
