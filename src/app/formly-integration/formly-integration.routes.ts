import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'formly-form/user-form',
    loadComponent: () =>
      import('./container/formly-user-form/formly-user-form').then((C) => C.FormlyUserForm),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormlyUserFormRoute {}
