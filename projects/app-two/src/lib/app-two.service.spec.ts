import { TestBed } from '@angular/core/testing';

import { AppTwoService } from './app-two.service';

describe('AppTwoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppTwoService = TestBed.get(AppTwoService);
    expect(service).toBeTruthy();
  });
});
