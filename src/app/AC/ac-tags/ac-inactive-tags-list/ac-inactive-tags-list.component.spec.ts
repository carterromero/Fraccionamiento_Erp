import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcInactiveTagsListComponent } from './ac-inactive-tags-list.component';

describe('AcInactiveTagsListComponent', () => {
  let component: AcInactiveTagsListComponent;
  let fixture: ComponentFixture<AcInactiveTagsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcInactiveTagsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcInactiveTagsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
