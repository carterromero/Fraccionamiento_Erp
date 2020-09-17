import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondominumsListComponent1 } from './condominums-list.component';

describe('CondominumsListComponent1', () => {
  let component: CondominumsListComponent1;
  let fixture: ComponentFixture<CondominumsListComponent1>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondominumsListComponent1 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondominumsListComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
