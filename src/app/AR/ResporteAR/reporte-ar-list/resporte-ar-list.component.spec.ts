import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteARListComponent } from './resporte-ar-list.component';

describe('ReporteARListComponent', () => {
  let component: ReporteARListComponent;
  let fixture: ComponentFixture<ReporteARListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteARListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteARListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
