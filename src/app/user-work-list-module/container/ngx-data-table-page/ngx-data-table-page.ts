import { CommonModule } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { of } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';

import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-ngx-data-table-page',
  standalone: true,
  imports: [CommonModule, NgxDatatableModule, NavbarComponent],
  templateUrl: './ngx-data-table-page.html',
  styleUrl: './ngx-data-table-page.scss',
})
export class NgxDataTablePage implements OnInit {
  @ViewChild(DatatableComponent) table!: DatatableComponent;
  @ViewChild('statusTemplate', { static: true }) statusTemplate!: TemplateRef<any>;
  @ViewChild('nameTemplate', { static: true }) nameTemplate!: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate!: TemplateRef<any>;

  rows: any[] = [];
  loadingIndicator = true;
  reorderable = true;
  columns: any[] = [];
  ColumnMode = ColumnMode;

  // Json Config simulating external config
  tableConfig = {
    columns: [
      { name: 'Name', prop: 'name', type: 'custom', templateName: 'nameTemplate' },
      { name: 'Gender', prop: 'gender', type: 'text' },
      { name: 'Company', prop: 'company', type: 'text' },
      { name: 'Status', prop: 'status', type: 'custom', templateName: 'statusTemplate' },
      { name: 'Action', prop: 'action', type: 'custom', templateName: 'actionTemplate' }
    ],
    settings: {
      limit: 10
    }
  };

  ngOnInit() {
    this.prepareColumns();
    this.loadData();
  }

  prepareColumns() {
    this.columns = this.tableConfig.columns.map(col => {
      let cellTemplate = null;
      if (col.templateName === 'statusTemplate') cellTemplate = this.statusTemplate;
      if (col.templateName === 'nameTemplate') cellTemplate = this.nameTemplate;
      if (col.templateName === 'actionTemplate') cellTemplate = this.actionTemplate;

      return {
        name: col.name,
        prop: col.prop,
        cellTemplate: cellTemplate,
        flexGrow: 1
      };
    });
  }

  loadData() {
    this.loadingIndicator = true;
    this.fetchFakeData().subscribe(data => {
      this.rows = data;
      this.loadingIndicator = false;
    });
  }

  fetchFakeData() {
    this.loadingIndicator = true;
    const data = [
      { name: 'Austin', gender: 'Male', company: 'Swimlane', status: 'Active' },
      { name: 'Dany', gender: 'Male', company: 'KFC', status: 'Inactive' },
      { name: 'Molly', gender: 'Female', company: 'Burger King', status: 'Active' },
      { name: 'John', gender: 'Male', company: 'McDonalds', status: 'Active' },
      { name: 'Sarah', gender: 'Female', company: 'Wendy\'s', status: 'Inactive' },
      { name: 'David', gender: 'Male', company: 'Taco Bell', status: 'Active' },
    ];
    // Simulate API delay
    return of(data).pipe(delay(1000),
      finalize(() => {
        this.loadingIndicator = false;
      })
    );

  }
}
