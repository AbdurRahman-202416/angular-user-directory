import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-test-formly',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, FormlyMaterialModule, NavbarComponent],
  templateUrl: './test-formly.html',
  styleUrl: './test-formly.scss',
})
export class TestFormly {
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },
    },
    {
      key: 'password',
      type: 'input',
      props: {
        label: 'Password',
        placeholder: 'Enter password',
        required: true,
        type: 'password'
      },
    },
    {
      key: 'select',
      type: 'select',
      props: {
        label: 'Select',
        options: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
        ],
      },
    }
  ];

  onSubmit() {
    console.log(this.model);
  }
}
