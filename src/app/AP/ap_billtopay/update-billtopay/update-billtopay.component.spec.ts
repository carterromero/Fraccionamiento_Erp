import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBilltopayComponent } from './update-billtopay.component';

describe('UpdateBilltopayComponent', () => {
  let component: UpdateBilltopayComponent;
  let fixture: ComponentFixture<UpdateBilltopayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBilltopayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBilltopayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
