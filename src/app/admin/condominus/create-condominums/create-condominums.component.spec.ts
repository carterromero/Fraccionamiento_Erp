import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCondominumsComponent } from './create-condominums.component';

describe('CreateCondominumsComponent', () => {
  let component: CreateCondominumsComponent;
  let fixture: ComponentFixture<CreateCondominumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCondominumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCondominumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
