import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurcharseListComponent } from './purcharse-list.component';

describe('PurcharseListComponent', () => {
  let component: PurcharseListComponent;
  let fixture: ComponentFixture<PurcharseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurcharseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurcharseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
