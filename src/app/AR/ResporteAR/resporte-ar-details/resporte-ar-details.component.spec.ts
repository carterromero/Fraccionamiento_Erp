import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResporteARDetailsComponent } from './resporte-ar-details.component';

describe('ResporteARDetailsComponent', () => {
  let component: ResporteARDetailsComponent;
  let fixture: ComponentFixture<ResporteARDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResporteARDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResporteARDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
