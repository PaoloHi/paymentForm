import { TestBed } from '@angular/core/testing';

import { WereableService } from './wereable.service';

describe('WereableService', () => {
  let service: WereableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WereableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
