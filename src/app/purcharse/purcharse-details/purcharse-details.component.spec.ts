import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurcharseDetailsComponent } from './purcharse-details.component';

describe('PurcharseDetailsComponent', () => {
  let component: PurcharseDetailsComponent;
  let fixture: ComponentFixture<PurcharseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurcharseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurcharseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
