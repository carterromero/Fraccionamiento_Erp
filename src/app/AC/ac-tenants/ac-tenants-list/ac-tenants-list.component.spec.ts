import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcTenantsListComponent } from './ac-tenants-list.component';

describe('AcTenantsListComponent', () => {
  let component: AcTenantsListComponent;
  let fixture: ComponentFixture<AcTenantsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcTenantsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcTenantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
