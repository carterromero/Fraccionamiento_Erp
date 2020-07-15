import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcCreateTagsComponent } from './ac-create-tags.component';

describe('AcCreateTagsComponent', () => {
  let component: AcCreateTagsComponent;
  let fixture: ComponentFixture<AcCreateTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcCreateTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcCreateTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
