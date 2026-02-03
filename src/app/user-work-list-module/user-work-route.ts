import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user-work',
    loadComponent: () =>
      import('../user-work-list-module/container/user-works-list/user-works-list').then(
        (C) => C.UserWorksList,
      ),
  },
  {
    path: 'formly',
    loadComponent: () =>
      import('../user-work-list-module/container/test-formly/test-formly').then(
        (C) => C.TestFormly,
      ),
  },
  {
    path: 'ngx-datatable',
    loadComponent: () =>
      import('./container/ngx-data-table-page/ngx-data-table-page').then(
        (C) => C.NgxDataTablePage,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class userWorkListRoute { }
