import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEntrysComponent } from './create-entrys.component';

describe('CreateEntrysComponent', () => {
  let component: CreateEntrysComponent;
  let fixture: ComponentFixture<CreateEntrysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEntrysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEntrysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
