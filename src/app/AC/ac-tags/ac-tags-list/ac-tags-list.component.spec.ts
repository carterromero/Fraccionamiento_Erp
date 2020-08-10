import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcTagsListComponent } from './ac-tags-list.component';

describe('AcTagsListComponent', () => {
  let component: AcTagsListComponent;
  let fixture: ComponentFixture<AcTagsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcTagsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcTagsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
