import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyUserForm } from './formly-user-form';

describe('FormlyUserForm', () => {
  let component: FormlyUserForm;
  let fixture: ComponentFixture<FormlyUserForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormlyUserForm],
    }).compileComponents();

    fixture = TestBed.createComponent(FormlyUserForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
