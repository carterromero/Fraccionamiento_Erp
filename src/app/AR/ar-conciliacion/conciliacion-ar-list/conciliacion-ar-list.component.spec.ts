import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciliacionARListComponent } from './conciliacion-ar-list.component';

describe('ConciliacionARListComponent', () => {
  let component: ConciliacionARListComponent;
  let fixture: ComponentFixture<ConciliacionARListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConciliacionARListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConciliacionARListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
