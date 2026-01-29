import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';

import { UserFormlyService } from '../../services/formly-services';

@Component({
  selector: 'app-create-user',
  imports: [FormlyModule, ReactiveFormsModule],
  templateUrl: './formly-user-form.html',
  styleUrl: './formly-user-form.scss',
})
export class FormlyUserForm implements OnInit {
  form = new FormGroup({});
  model: any = {};
  fields!: FormlyFieldConfig[];

  constructor(private userFormlyService: UserFormlyService) {}

  ngOnInit(): void {
    this.fields = this.userFormlyService.getUserFormFields();
  }

  submit() {
    if (this.form.valid) {
      console.log(this.model);
      alert(JSON.stringify(this.model));
    }
  }
}
