import { TestBed } from '@angular/core/testing';

import { PServicesService } from './p-services.service';

describe('PServicesService', () => {
  let service: PServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
