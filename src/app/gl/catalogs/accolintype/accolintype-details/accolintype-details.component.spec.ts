import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccolintypeDetailsComponent } from './accolintype-details.component';

describe('AccolintypeDetailsComponent', () => {
  let component: AccolintypeDetailsComponent;
  let fixture: ComponentFixture<AccolintypeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccolintypeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccolintypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
