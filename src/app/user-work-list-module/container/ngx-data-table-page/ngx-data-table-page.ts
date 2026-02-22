import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ColumnMode, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { finalize } from 'rxjs/operators';
import { UserListService } from '../../services/user-list.service';
import { UserType } from '../../types/user.type';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { EditUserDialogComponent } from './edit-user-dialog.component';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-ngx-data-table-page',
  standalone: true,
  imports: [
    CommonModule,
    NgxDatatableModule,
    NavbarComponent,
    MatIconModule,
    MatProgressBarModule,
    MatDialogModule,
  ],
  templateUrl: './ngx-data-table-page.html',
  styleUrl: './ngx-data-table-page.scss',
})
export class NgxDataTablePage implements OnInit {
  private userService = inject(UserListService);
  private dialog = inject(MatDialog);

  rows: UserType[] = [];
  loadingIndicator = false;
  ColumnMode = ColumnMode;

  ngOnInit() {
    this.loadData();
  }

  editUser(row: UserType) {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      width: '400px',
      data: row,
    });

    dialogRef.afterClosed().subscribe((result: UserType | undefined) => {
      if (result) {
        // Find index and update to trigger angular change detection properly if necessary
        const index = this.rows.findIndex((r) => r.id === result.id);
        if (index > -1) {
          const updatedRows = [...this.rows];
          updatedRows[index] = result;
          this.rows = updatedRows;
          sessionStorage.setItem('users_list', JSON.stringify(this.rows));
          console.log('User edited:', result);
        }
      }
    });
  }

  deleteUser(row: UserType) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        title: 'Delete User',
        message: `Are you sure you want to delete ${row.name}?`,
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.rows = this.rows.filter((r) => r.id !== row.id);
        sessionStorage.setItem('users_list', JSON.stringify(this.rows));
        console.log('User deleted successfully.');
      }
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
