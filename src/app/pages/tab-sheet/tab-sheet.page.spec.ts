import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSheetPage } from './tab-sheet.page';

describe('TabSheetPage', () => {
  let component: TabSheetPage;
  let fixture: ComponentFixture<TabSheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabSheetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
