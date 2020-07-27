import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacpvListComponent } from './facpv-list.component';

describe('FacpvListComponent', () => {
  let component: FacpvListComponent;
  let fixture: ComponentFixture<FacpvListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacpvListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacpvListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
