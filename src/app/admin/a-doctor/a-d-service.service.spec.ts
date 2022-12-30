import { TestBed } from '@angular/core/testing';

import { ADServiceService } from './a-d-service.service';

describe('ADServiceService', () => {
  let service: ADServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ADServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
