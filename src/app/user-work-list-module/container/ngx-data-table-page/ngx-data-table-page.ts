import { CommonModule } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { ColumnMode, DatatableComponent, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { finalize, delay } from 'rxjs/operators';
import { UserListService } from '../../services/user-list.service';
import { UserType } from '../../types/user.type';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-ngx-data-table-page',
  standalone: true,
  imports: [CommonModule, NgxDatatableModule, NavbarComponent, MatIconModule, MatProgressBarModule],
  templateUrl: './ngx-data-table-page.html',
  styleUrl: './ngx-data-table-page.scss',
})
export class NgxDataTablePage implements OnInit {
  @ViewChild(DatatableComponent) table!: DatatableComponent;
  @ViewChild('nameTemplate', { static: true }) nameTemplate!: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate!: TemplateRef<any>;

  private userService = inject(UserListService);

  rows: UserType[] = [];
  loadingIndicator = false;
  reorderable = true;
  columns: any[] = [];
  ColumnMode = ColumnMode;

  // Table Configuration for User Data
  tableConfig = {
    columns: [
      { name: 'Name', prop: 'name', templateName: 'nameTemplate' },
      { name: 'Email', prop: 'email' },
      { name: 'Phone', prop: 'phone' },
      { name: 'Website', prop: 'website' },
      { name: 'Company', prop: 'company.name' },
      { name: 'Action', prop: 'id', templateName: 'actionTemplate' },
    ],
    settings: {
      limit: 10,
    },
  };

  ngOnInit() {
    this.prepareColumns();
    this.loadData();
  }

  prepareColumns() {
    this.columns = this.tableConfig.columns.map((col) => {
      let cellTemplate = null;
      if (col.templateName === 'nameTemplate') cellTemplate = this.nameTemplate;
      if (col.templateName === 'actionTemplate') cellTemplate = this.actionTemplate;

      return {
        name: col.name,
        prop: col.prop,
        cellTemplate: cellTemplate,
        flexGrow: 1,
      };
    });
  }

  loadData() {
    const KEY = 'users_list';

    // cache check
    const cached = sessionStorage.getItem(KEY);
    if (cached) {
      this.rows = JSON.parse(cached);
      this.loadingIndicator = false;
      return;
    }

    // API call
    this.loadingIndicator = true;
    this.userService
      .getAllUsersList()
      .pipe(finalize(() => (this.loadingIndicator = false)))
      .subscribe({
        next: (data) => {
          this.rows = data;
          sessionStorage.setItem(KEY, JSON.stringify(data));
        },
        error: (err) => console.error(err),
      });
  }
}
