import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserdashboardComponent } from './create-userdashboard.component';

describe('CreateUserdashboardComponent', () => {
  let component: CreateUserdashboardComponent;
  let fixture: ComponentFixture<CreateUserdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
