import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFormly } from './test-formly';

describe('TestFormly', () => {
  let component: TestFormly;
  let fixture: ComponentFixture<TestFormly>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestFormly],
    }).compileComponents();

    fixture = TestBed.createComponent(TestFormly);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
