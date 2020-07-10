import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { PdfPurcharseDetailsComponent } from './pdf-purcharse-details.component';

describe('PdfPurcharseDetailsComponent', () => {
  let component: PdfPurcharseDetailsComponent;
  let fixture: ComponentFixture<PdfPurcharseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfPurcharseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfPurcharseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
