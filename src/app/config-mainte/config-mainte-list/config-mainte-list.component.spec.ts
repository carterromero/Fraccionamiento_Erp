import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigMainteListComponent } from './config-mainte-list.component';

describe('ConfigMainteListComponent', () => {
  let component: ConfigMainteListComponent;
  let fixture: ComponentFixture<ConfigMainteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigMainteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigMainteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
