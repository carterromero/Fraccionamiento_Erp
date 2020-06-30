import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciliacionDetailsComponent } from './conciliacion-details.component';

describe('ConciliacionDetailsComponent', () => {
  let component: ConciliacionDetailsComponent;
  let fixture: ComponentFixture<ConciliacionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConciliacionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConciliacionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
