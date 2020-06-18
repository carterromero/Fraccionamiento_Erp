import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBilltopayComponent } from './create-billtopay.component';

describe('CreateBilltopayComponent', () => {
  let component: CreateBilltopayComponent;
  let fixture: ComponentFixture<CreateBilltopayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBilltopayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBilltopayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
