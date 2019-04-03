import { TestBed } from '@angular/core/testing';

import { SubjectcategoryService } from './subjectcategory.service';

describe('SubjectcategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubjectcategoryService = TestBed.get(SubjectcategoryService);
    expect(service).toBeTruthy();
  });
});
