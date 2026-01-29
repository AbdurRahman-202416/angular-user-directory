import { TestBed } from '@angular/core/testing';

import { FormlyServices } from './formly-services';

describe('FormlyServices', () => {
  let service: FormlyServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormlyServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
