import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReservationsComponent } from './update-reservations.component';

describe('UpdateReservationsComponent', () => {
  let component: UpdateReservationsComponent;
  let fixture: ComponentFixture<UpdateReservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateReservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
