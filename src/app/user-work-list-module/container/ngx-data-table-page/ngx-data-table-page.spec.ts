import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDataTablePage } from './ngx-data-table-page';

describe('NgxDataTablePage', () => {
  let component: NgxDataTablePage;
  let fixture: ComponentFixture<NgxDataTablePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxDataTablePage],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxDataTablePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
