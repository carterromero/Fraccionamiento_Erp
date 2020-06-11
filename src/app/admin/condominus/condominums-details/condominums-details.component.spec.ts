import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondominumsDetailsComponent } from './condominums-details.component';

describe('CondominumsDetailsComponent', () => {
  let component: CondominumsDetailsComponent;
  let fixture: ComponentFixture<CondominumsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondominumsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondominumsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
