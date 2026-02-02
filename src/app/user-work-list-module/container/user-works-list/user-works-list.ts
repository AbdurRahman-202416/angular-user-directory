import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { UserWorkServices } from '../../services/user-work-services';
import { userTodosType } from '../../types/user-work.type';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { finalize, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-works-list',
  imports: [CommonModule, FormsModule, MatPaginatorModule, RouterLink],
  templateUrl: './user-works-list.html',
  styleUrl: './user-works-list.scss',
})
export class UserWorksList implements OnInit, OnDestroy {
  constructor(
    private userWorkService: UserWorkServices,
    public route: Router,
    public queryParams: ActivatedRoute,
  ) {}
  TodoList: userTodosType[] = [];
  AllData: userTodosType[] = [];
  inputSearchData: string = '';
  isLoading = signal(true);
  totalUsers = 0;
  pageIndex = 0;
  pageSize = 5;

  private destroy$ = new Subject<void>();
  ngOnInit(): void {
    this.getTodo();
    this.PaginatorData(this.pageIndex, this.pageSize);
  }

  getUrlQueryParams() {
    console.log(this.AllData);

    this.queryParams.queryParamMap
      .pipe(
        finalize(() => {
          this.isLoading.set(false);
        }),
      )
      .subscribe((params) => {
        console.log(params.get('search'));
        let value = params.get('search');
        if (value) {
          this.searchData(value);
        } else {
          console.log('null');
        }
      });
  }

  getTodo() {
    this.isLoading.set(true);
    const cachedData = localStorage.getItem('todos');
    if (cachedData) {
      this.AllData = JSON.parse(cachedData);
    }
    this.userWorkService
      .getAllTodo()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {
        this.AllData = data;
        this.totalUsers = this.AllData.length;
        localStorage.setItem('todos', JSON.stringify(data));
        this.isLoading.set(false);
        this.getUrlQueryParams();
      });
  }

  searchData(data: string) {
    console.log('click');
    if (data.length === 0) {
      return;
    }

    this.route.navigate(['work/user-work'], {
      queryParams: {
        search: this.inputSearchData.trim(),
      },
    });

    this.isLoading.set(true);

    this.TodoList = this.AllData?.filter((todo) => todo.title.includes(data));
    console.log(this.TodoList);
    this.isLoading.set(false);
  }

  Refresh() {
    this.PaginatorData(this.pageIndex, this.pageSize);
    this.inputSearchData = '';
  }

  PaginatorData(page: number, itemSize: number) {
    this.isLoading.set(true);
    let data = this.AllData;
    const start = page * itemSize;
    const end = start + itemSize;
    this.TodoList = data.slice(start, end);
    this.isLoading.set(false);
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.PaginatorData(event.pageIndex, event.pageSize);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    console.log('destroy');
  }
}
