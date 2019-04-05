import { TestBed } from '@angular/core/testing';

import { Sidenav1Service } from './sidenav1.service';

describe('Sidenav1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Sidenav1Service = TestBed.get(Sidenav1Service);
    expect(service).toBeTruthy();
  });
});
