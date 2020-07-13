import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfHistoriaListComponent } from './pdf-historia-list.component';

describe('PdfHistoriaListComponent', () => {
  let component: PdfHistoriaListComponent;
  let fixture: ComponentFixture<PdfHistoriaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfHistoriaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfHistoriaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
