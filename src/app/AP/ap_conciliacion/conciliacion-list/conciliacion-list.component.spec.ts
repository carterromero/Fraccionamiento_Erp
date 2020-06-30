import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciliacionListComponent } from './conciliacion-list.component';

describe('ConciliacionListComponent', () => {
  let component: ConciliacionListComponent;
  let fixture: ComponentFixture<ConciliacionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConciliacionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConciliacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
