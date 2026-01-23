import { TestBed } from '@angular/core/testing';

import { UserListFormService } from './user-list-form-service';

describe('UserListFormService', () => {
  let service: UserListFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserListFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
