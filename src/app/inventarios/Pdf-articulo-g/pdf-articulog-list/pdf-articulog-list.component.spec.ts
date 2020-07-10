import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfArticulogListComponent } from './pdf-articulog-list.component';

describe('PdfArticulogListComponent', () => {
  let component: PdfArticulogListComponent;
  let fixture: ComponentFixture<PdfArticulogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfArticulogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfArticulogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
