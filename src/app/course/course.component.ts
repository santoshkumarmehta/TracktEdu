import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseForm:FormGroup;
  
 constructor( private courseServise:CourseService, private formBuilder:FormBuilder) { }


  addCourse(){
    this.courseServise.addCourse(this.courseForm.value).subscribe((res)=>{
      console.log(res);
    },
    error=>{
     
    }
    );
  }

  ngOnInit() {
    this.courseForm=this.formBuilder.group({
      courseid:[''],
      schoolid:[''],
      coursename:[''],
      coursecode:[''],
      isactive:['',[Validators.required]]
    })
// this.courseServise.retrive();
  }



}
