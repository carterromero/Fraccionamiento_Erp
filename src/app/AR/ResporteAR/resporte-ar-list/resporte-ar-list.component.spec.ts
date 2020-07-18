import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResporteARListComponent } from './resporte-ar-list.component';

describe('ResporteARListComponent', () => {
  let component: ResporteARListComponent;
  let fixture: ComponentFixture<ResporteARListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResporteARListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResporteARListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
