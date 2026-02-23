import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, Validators, FormGroupDirective } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule, FormlyFormOptions } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { NgxDatatableModule, ColumnMode } from '@swimlane/ngx-datatable';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatNativeDateModule } from '@angular/material/core';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';

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
    MatTooltipModule,
    MatNativeDateModule,
    FormlyMatDatepickerModule,
  ],
  templateUrl: './test-formly.html',
  styleUrl: './test-formly.scss',
})
export class TestFormly {
  form = new FormGroup({});
  model: any = {
    personalInfo: {},
    accountInfo: {},
    skills: [],
  };
  options: FormlyFormOptions = {};

  @ViewChild(FormGroupDirective) formDir!: FormGroupDirective;

  editingId: number | null = null;
  isFiltered = false;

  rows: any[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active',
      skills: 'Angular, Node',
      originalModel: {
        personalInfo: { firstName: 'John', lastName: 'Doe', mobile: '01712345678', dob: new Date('1990-01-01') },
        accountInfo: { email: 'john@example.com' },
        role: 'Admin',
        status: 'Active',
        skills: [{ name: 'Angular', level: 'Expert' }, { name: 'Node', level: 'Intermediate' }]
      }
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
      status: 'Inactive',
      skills: 'React, Python',
      originalModel: {
        personalInfo: { firstName: 'Jane', lastName: 'Smith', mobile: '01812345678', dob: new Date('1992-05-15') },
        accountInfo: { email: 'jane@example.com' },
        role: 'User',
        status: 'Inactive',
        skills: [{ name: 'React', level: 'Expert' }, { name: 'Python', level: 'Beginner' }]
      }
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'Editor',
      status: 'Active',
      skills: 'UI/UX',
      originalModel: {
        personalInfo: { firstName: 'Bob', lastName: 'Johnson', mobile: '01912345678', dob: new Date('1988-10-20') },
        accountInfo: { email: 'bob@example.com' },
        role: 'Editor',
        status: 'Active',
        skills: [{ name: 'UI/UX', level: 'Expert' }]
      }
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
          className: 'col-6',
          key: 'accountInfo.email',
          type: 'input',
          props: {
            label: 'Email address',
            placeholder: 'user@example.com',
            required: true,
          },
          validation: {
            messages: {
              pattern: (error, field: FormlyFieldConfig) =>
                `"${field.formControl?.value}" is not a valid email address`,
            },
          },
        },
        {
          className: 'col-6',
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
          className: 'col-6',
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
            className: 'col-6',
            type: 'input',
            key: 'name',
            props: {
              label: 'Skill Name',
              placeholder: 'e.g. Angular',
              required: true,
            },
          },
          {
            className: 'col-6',
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

  constructor(private cdr: ChangeDetectorRef) { }

  onSubmit() {
    if (this.form.valid) {
      const skillsList = this.model.skills?.map((s: any) => s.name).join(', ') || 'None';

      if (this.editingId) {
        this.rows = this.rows.map(row => {
          if (row.id === this.editingId) {
            return {
              ...row,
              name: `${this.model.personalInfo.firstName} ${this.model.personalInfo.lastName}`,
              email: this.model.accountInfo.email,
              role: this.model.role === 'Other' ? this.model.otherRole : this.model.role,
              status: this.model.status,
              skills: skillsList,
              originalModel: JSON.parse(JSON.stringify(this.model))
            };
          }
          return row;
        });
        this.editingId = null;
      } else {
        const newUser = {
          id: Date.now(),
          name: `${this.model.personalInfo.firstName} ${this.model.personalInfo.lastName}`,
          email: this.model.accountInfo.email,
          role: this.model.role === 'Other' ? this.model.otherRole : this.model.role,
          status: this.model.status,
          skills: skillsList,
          originalModel: JSON.parse(JSON.stringify(this.model))
        };
        this.rows = [...this.rows, newUser];
      }

      this.resetForm();
    }
  }

  editUser(row: any) {
    this.editingId = row.id;
    this.model = JSON.parse(JSON.stringify(row.originalModel));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  deleteUser(row: any) {
    if (confirm(`Are you sure you want to delete ${row.name}?`)) {
      this.rows = this.rows.filter(r => r.id !== row.id);
    }
  }

  resetForm() {
    this.editingId = null;
    this.model = {
      personalInfo: {},
      accountInfo: {},
      skills: [],
    };

    if (this.options.resetModel) {
      this.options.resetModel();
    }

    if (this.formDir) {
      this.formDir.resetForm(this.model);
    } else {
      this.form.reset(this.model);
    }

    this.cdr.detectChanges();
  }

  exportData() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.rows, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "registered_users.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

  toggleFilter() {
    this.isFiltered = !this.isFiltered;
    if (this.isFiltered) {
      this.rows = [...this.rows].sort((a, b) => a.name.localeCompare(b.name));
    } else {
      this.rows = [...this.rows].sort((a, b) => b.name.localeCompare(a.name));
    }
  }
}
