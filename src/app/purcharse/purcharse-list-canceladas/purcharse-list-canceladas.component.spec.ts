import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurcharseListCanceladasComponent } from './purcharse-list-canceladas.component';

describe('PurcharseListCanceladasComponent', () => {
  let component: PurcharseListCanceladasComponent;
  let fixture: ComponentFixture<PurcharseListCanceladasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurcharseListCanceladasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurcharseListCanceladasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
