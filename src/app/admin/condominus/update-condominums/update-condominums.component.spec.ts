import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCondominumsComponent } from './update-condominums.component';

describe('UpdateCondominumsComponent', () => {
  let component: UpdateCondominumsComponent;
  let fixture: ComponentFixture<UpdateCondominumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCondominumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCondominumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
