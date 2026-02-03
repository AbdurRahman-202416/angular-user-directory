import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'User Management',
    loadChildren: () =>
      import('./user-list-modules/user-list-modules-module').then((m) => m.UserListModulesModule),
  },
  {
    path: 'work',
    title: 'User Work List',
    loadChildren: () =>
      import('./user-work-list-module/user-work-list-module-module').then(
        (m) => m.UserWorkListModuleModule,
      ),
  },
  // {
  //   path: 'work',
  //   title: 'User Work List',
  //   loadChildren: () =>
  //     import('./user-work-list-module/user-work-list-module-module').then(
  //       (m) => m.UserWorkListModuleModule,
  //     ),
  // },
  {
    path: 'formly',
    title: 'Formly User Form',
    loadChildren: () =>
      import('./formly-integration/formly-integration-module').then(
        (m) => m.FormlyIntegrationModule,
      ),
  },
];
