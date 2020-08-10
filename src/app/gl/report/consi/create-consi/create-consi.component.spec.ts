import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConsiComponent } from './create-consi.component';

describe('CreateConsiComponent', () => {
  let component: CreateConsiComponent;
  let fixture: ComponentFixture<CreateConsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateConsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
