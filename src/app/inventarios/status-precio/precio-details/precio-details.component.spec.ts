import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecioDetailsComponent } from './precio-details.component';

describe('PrecioDetailsComponent', () => {
  let component: PrecioDetailsComponent;
  let fixture: ComponentFixture<PrecioDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecioDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
