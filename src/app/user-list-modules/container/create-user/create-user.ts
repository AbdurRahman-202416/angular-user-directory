import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserListFormService } from '../../services/user-list-form-service';
import { CommonModule, JsonPipe } from '@angular/common';
import { Location } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-user',
  imports: [ReactiveFormsModule, RouterModule, CommonModule, RouterLink],
  templateUrl: './create-user.html',
  styleUrl: './create-user.scss',
})
export class CreateUser implements OnInit {
  constructor(
    private userFormService: UserListFormService,
    private location: Location,
  ) {}

  userForm!: FormGroup;

  ngOnInit(): void {
    this.userForm = this.userFormService.createUserForm();
    console.log(this.userForm);
  }
  submit() {
    alert(JSON.stringify(this.userForm.value));
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      console.log(this.userForm, ' After All Form Control Data Set Successfully ');
      this.userForm.reset();
    }
  }

  goBack() {
    this.location.back();
  }
}
