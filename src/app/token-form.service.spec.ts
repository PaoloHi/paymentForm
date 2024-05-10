import { TestBed } from '@angular/core/testing';

import { TokenFormService } from './token-form.service';

describe('TokenFormService', () => {
  let service: TokenFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
