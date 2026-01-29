import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormlyServices {}

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
        templateOptions: {
          label: 'Username',
          required: true,
          minLength: 3,
        },
      },
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          label: 'Email',
          type: 'email',
          required: true,
        },
      },
      {
        key: 'phone',
        type: 'input',
        templateOptions: {
          label: 'Phone',
          required: true,
        },
      },
      {
        key: 'skills',
        type: 'repeat',
        templateOptions: {
          label: 'Skills',
          addText: '+ Add More Skill',
        },
        fieldArray: {
          fieldGroup: [
            {
              key: 'skillsName',
              type: 'input',
              templateOptions: {
                label: 'Skill Name',
                required: true,
              },
            },
          ],
        },
      },
      {
        key: 'password',
        type: 'input',
        templateOptions: {
          label: 'Password',
          type: 'password',
          required: true,
          minLength: 6,
        },
      },
      {
        key: 'address',
        type: 'textarea',
        templateOptions: {
          label: 'Address',
        },
      },
    ];
  }
}
