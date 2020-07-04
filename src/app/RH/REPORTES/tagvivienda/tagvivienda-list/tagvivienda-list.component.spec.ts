import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagviviendaListComponent } from './tagvivienda-list.component';

describe('TagviviendaListComponent', () => {
  let component: TagviviendaListComponent;
  let fixture: ComponentFixture<TagviviendaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagviviendaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagviviendaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
