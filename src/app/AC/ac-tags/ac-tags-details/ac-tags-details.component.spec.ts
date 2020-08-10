import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcTagsDetailsComponent } from './ac-tags-details.component';

describe('AcTagsDetailsComponent', () => {
  let component: AcTagsDetailsComponent;
  let fixture: ComponentFixture<AcTagsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcTagsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcTagsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
