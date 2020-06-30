import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReservationsComponent } from './create-reservations.component';

describe('CreateReservationsComponent', () => {
  let component: CreateReservationsComponent;
  let fixture: ComponentFixture<CreateReservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
