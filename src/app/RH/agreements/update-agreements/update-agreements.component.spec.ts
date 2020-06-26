import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAgreementsComponent } from './update-agreements.component';

describe('UpdateAgreementsComponent', () => {
  let component: UpdateAgreementsComponent;
  let fixture: ComponentFixture<UpdateAgreementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAgreementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAgreementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
