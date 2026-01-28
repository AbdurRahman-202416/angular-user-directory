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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class userWorkListRoute {}
