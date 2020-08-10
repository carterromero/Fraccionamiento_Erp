import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslListComponent } from './transl-list.component';

describe('TranslListComponent', () => {
  let component: TranslListComponent;
  let fixture: ComponentFixture<TranslListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
