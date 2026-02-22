import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UserType } from './../../types/user.type';
import { UserListService } from './../../services/user-list-service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { NavbarComponent } from '../../../user-work-list-module/components/navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'app-user-list',
  imports: [CommonModule, RouterLink, MatPaginatorModule, NavbarComponent],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserList implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  isLoading = signal(true);

  pageList: UserType[] = [];
  totalUsers = 0;

  pageIndex = 0;
  pageSize = 5;

  constructor(
    private userListService: UserListService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.isLoading.set(true);

    this.userListService
      .getUsersPaginated(this.pageIndex + 1, this.pageSize)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          this.pageList = res.data;
          this.totalUsers = res.total;
          this.isLoading.set(false);
          this.cdr.detectChanges();
        },
        error: () => {
          this.isLoading.set(false);
          this.cdr.detectChanges();
        },
      });
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadUsers();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
