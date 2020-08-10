import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFacpvComponent } from './create-facpv.component';

describe('CreateFacpvComponent', () => {
  let component: CreateFacpvComponent;
  let fixture: ComponentFixture<CreateFacpvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFacpvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFacpvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
