import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfSupplierListComponent } from './pdf-supplier-list.component';

describe('PdfSupplierListComponent', () => {
  let component: PdfSupplierListComponent;
  let fixture: ComponentFixture<PdfSupplierListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfSupplierListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfSupplierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
