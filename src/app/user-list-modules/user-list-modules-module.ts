import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userListRoutes } from './user-list-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [userListRoutes, CommonModule, ReactiveFormsModule],
})
export class UserListModulesModule {}
