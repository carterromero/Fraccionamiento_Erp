import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAgreementsComponent } from './create-agreements.component';

describe('CreateAgreementsComponent', () => {
  let component: CreateAgreementsComponent;
  let fixture: ComponentFixture<CreateAgreementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAgreementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAgreementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
