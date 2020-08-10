import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsiListComponent } from './consi-list.component';

describe('ConsiListComponent', () => {
  let component: ConsiListComponent;
  let fixture: ComponentFixture<ConsiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
