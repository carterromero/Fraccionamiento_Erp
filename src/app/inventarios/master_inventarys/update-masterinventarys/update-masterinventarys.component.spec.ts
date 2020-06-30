import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMasterinventarysComponent } from './update-masterinventarys.component';

describe('UpdateMasterinventarysComponent', () => {
  let component: UpdateMasterinventarysComponent;
  let fixture: ComponentFixture<UpdateMasterinventarysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMasterinventarysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMasterinventarysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
