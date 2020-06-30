import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterinventarysListComponent } from './masterinventarys-list.component';

describe('MasterinventarysListComponent', () => {
  let component: MasterinventarysListComponent;
  let fixture: ComponentFixture<MasterinventarysListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterinventarysListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterinventarysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
