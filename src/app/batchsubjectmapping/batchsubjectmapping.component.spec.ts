import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchsubjectmappingComponent } from './batchsubjectmapping.component';

describe('BatchsubjectmappingComponent', () => {
  let component: BatchsubjectmappingComponent;
  let fixture: ComponentFixture<BatchsubjectmappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchsubjectmappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchsubjectmappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
