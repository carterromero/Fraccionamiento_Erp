import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccolintypeComponent } from './create-accolintype.component';

describe('CreateAccolintypeComponent', () => {
  let component: CreateAccolintypeComponent;
  let fixture: ComponentFixture<CreateAccolintypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccolintypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccolintypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
