import { TestBed } from '@angular/core/testing';

import { TurfingService } from './turfing.service';

describe('TurfingService', () => {
  let service: TurfingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurfingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
