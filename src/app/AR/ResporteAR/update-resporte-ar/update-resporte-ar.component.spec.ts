import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateResporteARComponent } from './update-resporte-ar.component';

describe('UpdateResporteARComponent', () => {
  let component: UpdateResporteARComponent;
  let fixture: ComponentFixture<UpdateResporteARComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateResporteARComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateResporteARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
