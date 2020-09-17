import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamaraListComponent } from './camara-list.component';

describe('CamaraListComponent', () => {
  let component: CamaraListComponent;
  let fixture: ComponentFixture<CamaraListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamaraListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamaraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
