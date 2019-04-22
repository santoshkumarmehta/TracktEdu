import { TestBed } from '@angular/core/testing';

import { BatchsubjectmappingService } from './batchsubjectmapping.service';

describe('BatchsubjectmappingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BatchsubjectmappingService = TestBed.get(BatchsubjectmappingService);
    expect(service).toBeTruthy();
  });
});
