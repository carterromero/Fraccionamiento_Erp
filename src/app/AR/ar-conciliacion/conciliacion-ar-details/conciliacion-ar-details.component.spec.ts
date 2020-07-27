import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciliacionARDetailsComponent } from './conciliacion-ar-details.component';

describe('ConciliacionARDetailsComponent', () => {
  let component: ConciliacionARDetailsComponent;
  let fixture: ComponentFixture<ConciliacionARDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConciliacionARDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConciliacionARDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
