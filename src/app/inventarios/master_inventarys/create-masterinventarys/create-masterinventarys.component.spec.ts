import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMasterinventarysComponent } from './create-masterinventarys.component';

describe('CreateMasterinventarysComponent', () => {
  let component: CreateMasterinventarysComponent;
  let fixture: ComponentFixture<CreateMasterinventarysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMasterinventarysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMasterinventarysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
