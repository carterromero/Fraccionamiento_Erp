import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecollectionComponent } from './update-collection.component';

describe('UpdateCollectionComponent', () => {
  let component: UpdatecollectionComponent;
  let fixture: ComponentFixture<UpdatecollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
