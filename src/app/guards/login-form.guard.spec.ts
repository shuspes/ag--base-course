import { TestBed, async, inject } from '@angular/core/testing';

import { LoginFormGuard } from './login-form.guard';

describe('LoginFormGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginFormGuard]
    });
  });

  it('should ...', inject([LoginFormGuard], (guard: LoginFormGuard) => {
    expect(guard).toBeTruthy();
  }));
});
