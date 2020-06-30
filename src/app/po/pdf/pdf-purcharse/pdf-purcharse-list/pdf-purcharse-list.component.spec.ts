import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfPurcharseListComponent } from './pdf-purcharse-list.component';

describe('PdfPurcharseListComponent', () => {
  let component: PdfPurcharseListComponent;
  let fixture: ComponentFixture<PdfPurcharseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfPurcharseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfPurcharseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
