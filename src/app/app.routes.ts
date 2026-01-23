import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'User Management',
    loadChildren: () =>
      import('./user-list-modules/user-list-modules-module').then((m) => m.UserListModulesModule),
  },
];
