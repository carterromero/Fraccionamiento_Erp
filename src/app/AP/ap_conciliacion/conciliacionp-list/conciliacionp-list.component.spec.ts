import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciliacionpListComponent } from './conciliacionp-list.component';

describe('ConciliacionpListComponent', () => {
  let component: ConciliacionpListComponent;
  let fixture: ComponentFixture<ConciliacionpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConciliacionpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConciliacionpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
