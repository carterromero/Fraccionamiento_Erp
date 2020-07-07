import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStatusPrecioartComponent } from './create-status-precioart.component';

describe('CreateStatusPrecioartComponent', () => {
  let component: CreateStatusPrecioartComponent;
  let fixture: ComponentFixture<CreateStatusPrecioartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStatusPrecioartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStatusPrecioartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
