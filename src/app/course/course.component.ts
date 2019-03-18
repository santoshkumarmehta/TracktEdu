import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CourseService } from '../course.service';
import { Observable } from 'rxjs';
import { FormControl } from "@angular/forms";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {AppService} from '../app.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseForm:FormGroup;
  searchData:FormGroup;
  tableurl='http://localhost:3000';
  isReadOnly=true;
  tableData:string [];
  public id;
 private productsObservable : Observable<any[]> ;

 constructor( private courseServise:CourseService, private formBuilder:FormBuilder, private http:HttpClient) { }


  addCourse(){
    this.courseServise.addCourse(this.courseForm.value).subscribe((res)=>{

   },
    error=>{  }
    );
  }
  get search(){
    // console.log(this.courseForm.get('search'))
    return this.searchData.get('search');
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
    // for Table
      this.http.get(this.tableurl+ '/course').subscribe( data=>{
      this.tableData= data as string [];
      console.log(this.tableData[0]);
      },
      (err:HttpErrorResponse)=>{
      console.log(err.message)
      }
      )

    this.courseForm=this.formBuilder.group({
      courseid:[''],
      schoolid:[''],
      coursename:[''],
      coursecode:[''],
      isactive:[''],
    //  search:['',]
    })

//for search
    this.searchData= this.formBuilder.group({
      search:['']
    })

  }


  //Delete 
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
// table column
tabledatacolumn(){
 this.courseServise.tabledatacolumn(this.tableurl+'/course').subscribe((res)=>{
  (<FormControl>this.courseForm.controls['courseid']).setValue(res[0].courseid);
  (<FormControl>this.courseForm.controls['schoolid']).setValue(res[0].schoolid);
  (<FormControl>this.courseForm.controls['coursename']).setValue(res[0].coursename);
  (<FormControl>this.courseForm.controls['coursecode']).setValue(res[0].coursecode);
  (<FormControl>this.courseForm.controls['isactive']).setValue(res[0].isactive);

 })
 } 

}
