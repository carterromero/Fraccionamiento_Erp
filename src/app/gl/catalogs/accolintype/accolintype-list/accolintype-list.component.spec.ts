import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccolintypeListComponent } from './accolintype-list.component';

describe('AccolintypeListComponent', () => {
  let component: AccolintypeListComponent;
  let fixture: ComponentFixture<AccolintypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccolintypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccolintypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
