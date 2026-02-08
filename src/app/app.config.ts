import { ApplicationConfig, provideBrowserGlobalErrorListeners, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { provideNativeDateAdapter } from '@angular/material/core';

import { routes } from './app.routes';
import { RepeatSectionType } from './shared/formly/repeat-section.type';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
    importProvidersFrom(
      FormlyModule.forRoot({
        types: [
          { name: 'repeat', component: RepeatSectionType },
        ],
        validationMessages: [
          { name: 'required', message: 'This field is required' },
        ],
      }),
      FormlyMaterialModule
    )
  ]
};
