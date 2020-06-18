import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePaytmentComponent } from './create-paytment.component';

describe('CreatePaytmentComponent', () => {
  let component: CreatePaytmentComponent;
  let fixture: ComponentFixture<CreatePaytmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePaytmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePaytmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
