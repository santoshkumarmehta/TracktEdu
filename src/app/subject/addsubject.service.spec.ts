import { TestBed } from '@angular/core/testing';

import { AddsubjectService } from './addsubject.service';

describe('AddsubjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddsubjectService = TestBed.get(AddsubjectService);
    expect(service).toBeTruthy();
  });
});
