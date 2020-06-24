import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterinventarysDetailsComponent } from './masterinventarys-details.component';

describe('MasterinventarysDetailsComponent', () => {
  let component: MasterinventarysDetailsComponent;
  let fixture: ComponentFixture<MasterinventarysDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterinventarysDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterinventarysDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
