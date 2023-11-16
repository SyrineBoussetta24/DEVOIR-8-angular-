import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { instrumentGuard } from './instrument.guard';

describe('instrumentGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => instrumentGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
