import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {CourseService} from '../course.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private addcourse:CourseService,  private http:HttpClient) { }

  courseForm:FormGroup;

  ngOnInit() {
    this.courseForm=this.formBuilder.group({
      courseid:[''],
      schoolid:[''],
      coursename:[''],
      coursecode:[''],
      isactive:[''],
    })
  }

  addCourse(){
    this.addcourse.addCourse(this.courseForm.value).subscribe((res)=>{

   },
    error=>{  }
    );
  }

}
