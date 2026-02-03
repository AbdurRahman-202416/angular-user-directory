import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserListFormService } from '../../services/user-list-form-service';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { NavbarComponent } from "../../../user-work-list-module/components/navbar/navbar.component";

@Component({
  selector: 'app-create-user',
  imports: [ReactiveFormsModule, RouterModule, CommonModule, RouterLink, NavbarComponent],
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

  get skills(): FormArray {
    return this.userForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this.userFormService.createSkillGroup());
  }

  removeSkill(index: number) {
    if (this.skills.length > 1) {
      this.skills.removeAt(index);
    }
  }

  submit() {
    alert(JSON.stringify(this.userForm.value));
    if (this.userForm.valid) {
      console.log(JSON.stringify(this.userForm.value), 'All feild Result ');
      console.log(this.userForm, ' After All Form Control Data Set Successfully ');
      this.userForm.reset();
    }
  }

  goBack() {
    this.location.back();
  }
}
