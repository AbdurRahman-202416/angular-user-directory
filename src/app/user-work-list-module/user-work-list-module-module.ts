import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userWorkListRoute } from './user-work-route';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, userWorkListRoute, ReactiveFormsModule],
})
export class UserWorkListModuleModule {}
