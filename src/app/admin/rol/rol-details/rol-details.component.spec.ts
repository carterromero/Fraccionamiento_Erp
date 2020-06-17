import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolDetailsComponent } from './rol-details.component';

describe('RolDetailsComponent', () => {
  let component: RolDetailsComponent;
  let fixture: ComponentFixture<RolDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
