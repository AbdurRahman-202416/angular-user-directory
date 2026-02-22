import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorksList } from './user-works-list';

describe('UserWorksList', () => {
  let component: UserWorksList;
  let fixture: ComponentFixture<UserWorksList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserWorksList],
    }).compileComponents();

    fixture = TestBed.createComponent(UserWorksList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
