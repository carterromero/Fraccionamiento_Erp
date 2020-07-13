import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusPrecioarticuloListComponent } from './status-precioarticulo-list.component';

describe('StatusPrecioarticuloListComponent', () => {
  let component: StatusPrecioarticuloListComponent;
  let fixture: ComponentFixture<StatusPrecioarticuloListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusPrecioarticuloListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPrecioarticuloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
