import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CourseService } from '../course.service';
import { Observable } from 'rxjs';
import { FormControl } from "@angular/forms";
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseForm:FormGroup;

  public id;
 private productsObservable : Observable<any[]> ;

 constructor( private courseServise:CourseService, private formBuilder:FormBuilder) { }


  addCourse(){
    this.courseServise.addCourse(this.courseForm.value).subscribe((res)=>{
   },
    error=>{  }
    );
  }
  get search(){
    console.log(this.courseForm.get('search'))
    return this.courseForm.get('search');
  }
  retriveCourse(){
 this.courseServise.retriveCOurse(this.search.value).subscribe((res)=>{
  console.log(res[0]);
  this.id=res[0].id;
    (<FormControl>this.courseForm.controls['courseid']).setValue(res[0].courseid);
   (<FormControl>this.courseForm.controls['schoolid']).setValue(res[0].schoolid);
   (<FormControl>this.courseForm.controls['coursename']).setValue(res[0].coursename);
   (<FormControl>this.courseForm.controls['coursecode']).setValue(res[0].coursecode);
   (<FormControl>this.courseForm.controls['isactive']).setValue(res[0].isactive);
   })
  }




  ngOnInit() {
    this.courseForm=this.formBuilder.group({
      courseid:[''],
      schoolid:[''],
      coursename:[''],
      coursecode:[''],
      isactive:[''],
      search:['']
    })

  }

  deleteCourse(){
    this.courseServise.deleteCourse(this.id).subscribe(
      res => {
        console.log("deleted")
      },
      error=>{
        console.log(error);
      }
    );
  }


}
