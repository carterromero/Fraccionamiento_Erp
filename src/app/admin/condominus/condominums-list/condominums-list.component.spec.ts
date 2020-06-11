import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondominumsListComponent } from './condominums-list.component';

describe('CondominumsListComponent', () => {
  let component: CondominumsListComponent;
  let fixture: ComponentFixture<CondominumsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondominumsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondominumsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
