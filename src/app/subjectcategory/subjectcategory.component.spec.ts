import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectcategoryComponent } from './subjectcategory.component';

describe('SubjectcategoryComponent', () => {
  let component: SubjectcategoryComponent;
  let fixture: ComponentFixture<SubjectcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
