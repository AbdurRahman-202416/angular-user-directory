import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { NgxDatatableModule, ColumnMode } from '@swimlane/ngx-datatable';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-test-formly',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    NavbarComponent,
    NgxDatatableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatDatepickerModule,
  ],
  templateUrl: './test-formly.html',
  styleUrl: './test-formly.scss',
})
export class TestFormly {
  form = new FormGroup({});
  model: any = {
    personalInfo: {},
    accountInfo: {
      email: 'user@example.com',
    },
    skills: [{ name: 'Angular', level: 'Expert' }],
  };

  rows: any[] = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active',
      skills: 'Angular, Node',
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
      status: 'Inactive',
      skills: 'React, Python',
    },
    {
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'Editor',
      status: 'Active',
      skills: 'UI/UX',
    },
  ];

  ColumnMode = ColumnMode;

  fields: FormlyFieldConfig[] = [
    {
      template: '<div class="field-group-title">Personal Information</div>',
    },
    {
      fieldGroupClassName: 'grid-container-12',
      fieldGroup: [
        {
          className: 'col-6',
          key: 'personalInfo.firstName',
          type: 'input',
          props: {
            label: 'First Name',
            placeholder: 'John',
            required: true,
            type: 'text',
            pattern: /^[a-zA-Z\s]*$/,
          },
          validators: {
            validation: [Validators.required],
          },
          validation: {
            messages: {
              required: 'First Name is required',
              pattern: 'Special characters are not allowed',
            },
          },
        },
        {
          className: 'col-6',
          key: 'personalInfo.lastName',
          type: 'input',
          props: {
            label: 'Last Name',
            placeholder: 'Doe',
            required: true,
          },
        },
        {
          className: 'col-6',
          key: 'personalInfo.mobile',
          type: 'input',
          props: {
            label: 'Mobile Number',
            placeholder: '01XXXXXXXXX',
            required: true,
            type: 'tel',
            pattern: /^[0-9]*$/,
            minLength: 11,
            maxLength: 16,
          },
          validation: {
            messages: {
              required: 'Mobile number is required',
              pattern: 'Only numeric characters are allowed',
              minLength: 'Mobile number must be at least 11 digits',
              maxLength: 'Mobile number cannot exceed 16 digits',
            },
          },
        },
        {
          className: 'col-6',
          key: 'personalInfo.dob',
          type: 'datepicker',
          props: {
            label: 'Date of Birth',
            placeholder: 'MM/DD/YYYY',
            required: true,
          },
        },
        {
          className: 'col-6',
          key: 'status',
          type: 'radio',
          props: {
            label: 'Account Status',
            required: true,
            options: [
              { label: 'Active', value: 'Active' },
              { label: 'Inactive', value: 'Inactive' },
            ],
          },
        },
      ],
    },
    {
      template: '<div class="field-group-title">Account & Role</div>',
    },
    {
      fieldGroupClassName: 'grid-container-12',
      fieldGroup: [
        {
          className: 'col-8',
          key: 'accountInfo.email',
          type: 'input',
          props: {
            label: 'Email address',
            placeholder: 'user@example.com',
            required: true,
            // pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          },
          validation: {
            messages: {
              pattern: (error, field: FormlyFieldConfig) =>
                `"${field.formControl?.value}" is not a valid email address`,
            },
          },
        },
        {
          className: 'col-4',
          key: 'role',
          type: 'select',
          props: {
            label: 'User Role',
            placeholder: 'Select role',
            required: true,
            options: [
              { label: 'Admin', value: 'Admin' },
              { label: 'User', value: 'User' },
              { label: 'Editor', value: 'Editor' },
              { label: 'Other', value: 'Other' },
            ],
          },
        },
        {
          className: 'col-12',
          key: 'otherRole',
          type: 'input',
          props: {
            label: 'Specify Other Role',
            placeholder: 'Enter your custom role',
            required: true,
          },
          expressions: {
            hide: 'model.role !== "Other"',
          },
        },
      ],
    },
    {
      template: '<div class="field-group-title">Expertise & Biography</div>',
    },
    {
      key: 'skills',
      type: 'repeat',
      props: {
        addText: 'Add New Skill',
      },
      fieldArray: {
        fieldGroupClassName: 'grid-container-12',
        fieldGroup: [
          {
            className: 'col-7',
            type: 'input',
            key: 'name',
            props: {
              label: 'Skill Name',
              placeholder: 'e.g. Angular',
              required: true,
            },
          },
          {
            className: 'col-5',
            type: 'select',
            key: 'level',
            props: {
              label: 'Level',
              options: [
                { label: 'Beginner', value: 'Beginner' },
                { label: 'Intermediate', value: 'Intermediate' },
                { label: 'Expert', value: 'Expert' },
              ],
            },
          },
        ],
      },
    },
    {
      key: 'bio',
      type: 'textarea',
      props: {
        label: 'Professional Biography',
        placeholder: 'Tell us about your background',
        rows: 2,
      },
    },
    {
      key: 'terms',
      type: 'checkbox',
      props: {
        label: 'I confirm that the information is accurate',
        required: true,
      },
    },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  onSubmit() {
    if (this.form.valid) {
      const skillsList = this.model.skills?.map((s: any) => s.name).join(', ') || 'None';
      const newUser = {
        name: `${this.model.personalInfo.firstName} ${this.model.personalInfo.lastName}`,
        email: this.model.accountInfo.email,
        role: this.model.role === 'Other' ? this.model.otherRole : this.model.role,
        status: this.model.status,
        skills: skillsList,
      };

      this.rows = [...this.rows, newUser];
      console.log('New User added:', newUser);

      // Reset form and model
      this.model = {
        personalInfo: {},
        accountInfo: {},
        skills: [],
      };
      this.form.reset();
      this.cdr.detectChanges();
    }
  }
}
