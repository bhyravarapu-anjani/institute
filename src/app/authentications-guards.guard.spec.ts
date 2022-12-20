import { TestBed } from '@angular/core/testing';

import { AuthenticationsGuardsGuard } from './authentications-guards.guard';

describe('AuthenticationsGuardsGuard', () => {
  let guard: AuthenticationsGuardsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticationsGuardsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
