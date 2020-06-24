import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePurcharseComponent } from './create-purcharse.component';

describe('CreatePurcharseComponent', () => {
  let component: CreatePurcharseComponent;
  let fixture: ComponentFixture<CreatePurcharseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePurcharseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePurcharseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
