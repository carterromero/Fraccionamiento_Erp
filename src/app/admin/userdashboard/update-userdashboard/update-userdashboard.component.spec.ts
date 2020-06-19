import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserdashboardComponent } from './update-userdashboard.component';

describe('UpdateUserdashboardComponent', () => {
  let component: UpdateUserdashboardComponent;
  let fixture: ComponentFixture<UpdateUserdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
