import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfSupplierDetailsComponent } from './pdf-supplier-details.component';

describe('PdfSupplierDetailsComponent', () => {
  let component: PdfSupplierDetailsComponent;
  let fixture: ComponentFixture<PdfSupplierDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfSupplierDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfSupplierDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
