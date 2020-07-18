import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResporteARComponent } from './create-resporte-ar.component';

describe('CreateResporteARComponent', () => {
  let component: CreateResporteARComponent;
  let fixture: ComponentFixture<CreateResporteARComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateResporteARComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateResporteARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
