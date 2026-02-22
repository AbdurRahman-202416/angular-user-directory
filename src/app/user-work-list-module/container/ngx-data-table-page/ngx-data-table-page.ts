import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ColumnMode, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { finalize } from 'rxjs/operators';
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
  private userService = inject(UserListService);

  rows: UserType[] = [];
  loadingIndicator = false;
  ColumnMode = ColumnMode;

  ngOnInit() {
    this.loadData();
  }

  editUser(row: any) {
    console.log('Editing user:', row);
    // You can implement routing to an edit page or opening a dialog here.
    alert(`Edit feature coming soon for ${row.name}`);
  }

  deleteUser(row: any) {
    if (confirm(`Are you sure you want to delete ${row.name}?`)) {
      this.rows = this.rows.filter((r) => r.id !== row.id);
      sessionStorage.setItem('users_list', JSON.stringify(this.rows));
      console.log('User deleted successfully.');
    }
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
