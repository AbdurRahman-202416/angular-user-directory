import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormlyServices { }

import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root',
})
export class UserFormlyService {
  getUserFormFields(): FormlyFieldConfig[] {
    return [
      {
        key: 'username',
        type: 'input',
        props: {
          label: 'Username',
          placeholder: 'Enter username',
          required: true,
          minLength: 3,
        },
      },
      {
        key: 'email',
        type: 'input',
        props: {
          label: 'Email',
          placeholder: 'Enter email address',
          type: 'email',
          required: true,
        },
      },
      {
        key: 'phone',
        type: 'input',
        props: {
          label: 'Phone',
          placeholder: 'Enter phone number',
          required: true,
        },
      },
      {
        key: 'address',
        type: 'textarea',
        props: {
          label: 'Address',
          placeholder: 'Enter your address',
          rows: 3,
        },
      },
    ];
  }
}
