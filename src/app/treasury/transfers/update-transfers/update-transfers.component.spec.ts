import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTransfersComponent } from './update-transfers.component';

describe('UpdateTransfersComponent', () => {
  let component: UpdateTransfersComponent;
  let fixture: ComponentFixture<UpdateTransfersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTransfersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
