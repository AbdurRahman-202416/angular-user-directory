import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./container/user-list/user-list').then((m) => m.UserList),
  },

  {
    path: 'user-details/:id',
    loadComponent: () => import('./container/user-detail/user-detail').then((m) => m.UserDetail),
  },
  {
    path: 'create-user',
    loadComponent: () => import('./container/create-user/create-user').then((m) => m.CreateUser),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class userListRoutes {}
