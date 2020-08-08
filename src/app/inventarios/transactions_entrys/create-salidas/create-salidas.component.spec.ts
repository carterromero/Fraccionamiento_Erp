import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSalidasComponent } from './create-salidas.component';

describe('CreateSalidasComponent', () => {
  let component: CreateSalidasComponent;
  let fixture: ComponentFixture<CreateSalidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSalidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSalidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
