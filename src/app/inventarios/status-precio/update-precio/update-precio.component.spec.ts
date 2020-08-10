import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePrecioComponent } from './update-precio.component';

describe('UpdatePrecioComponent', () => {
  let component: UpdatePrecioComponent;
  let fixture: ComponentFixture<UpdatePrecioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePrecioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePrecioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
