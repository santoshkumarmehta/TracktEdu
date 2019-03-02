import { TestBed } from '@angular/core/testing';

import { Test1serviceService } from './test1service.service';

describe('Test1serviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Test1serviceService = TestBed.get(Test1serviceService);
    expect(service).toBeTruthy();
  });
});
