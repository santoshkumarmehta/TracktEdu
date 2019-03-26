import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CourseService } from '../course.service';
import { FormControl } from "@angular/forms";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {AppService} from '../app.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  ngOnInit() {
    // for Table
      this.http.get(this.tableurl).subscribe( data=>{
      this.tableData= data as string [];
      // console.log(this.tableData[0]);
      },
      (err:HttpErrorResponse)=>{
      console.log(err.message)
      }
      )

    this.courseForm=this.formBuilder.group({
      id:[''],
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

  courseForm:FormGroup;
  searchData:FormGroup;
  
  tableurl;
  isReadOnly=true;
  tableData:string [];
  public id;

 constructor( private courseService:CourseService, private formBuilder:FormBuilder, private http:HttpClient, private appservice:AppService) {

  this.tableurl=this.courseService.courseurl;

  }

  get search(){
    // console.log(this.courseForm.get('search'))
    return this.searchData.get('search');
  }
  retriveCourse(){
 this.courseService.retriveCOurse(this.search.value).subscribe((res)=>{
  console.log(res[0]);
  this.id=res[0].id;
  (<FormControl>this.courseForm.controls['id']).setValue(res[0].id);
    (<FormControl>this.courseForm.controls['courseid']).setValue(res[0].courseid);
    (<FormControl>this.courseForm.controls['schoolid']).setValue(res[0].schoolid);
    (<FormControl>this.courseForm.controls['coursename']).setValue(res[0].coursename);
    (<FormControl>this.courseForm.controls['coursecode']).setValue(res[0].coursecode);
    (<FormControl>this.courseForm.controls['isactive']).setValue(res[0].isactive);
   })
  }
// for Edit
get edit(){
  return this.courseForm.get('id');
  }
  
  editData(id){
        this.courseService.editData(id).subscribe( data=>{
        this.id=data[0].id;
        (<FormControl>this.courseForm.controls['id']).setValue(data[0].id);
        (<FormControl>this.courseForm.controls['courseid']).setValue(data[0].courseid);
        (<FormControl>this.courseForm.controls['schoolid']).setValue(data[0].schoolid);
        (<FormControl>this.courseForm.controls['coursename']).setValue(data[0].coursename);
        (<FormControl>this.courseForm.controls['coursecode']).setValue(data[0].coursecode);
        (<FormControl>this.courseForm.controls['isactive']).setValue(data[0].isactive);
    })
  }

  coursename;
  coursecode;
  // for update

  updateCourse(){
      this.courseService.update(this.updateId, this.courseForm.value).subscribe((data)=>{
      // this.id=data[0].id;
      // (<FormControl>this.courseForm.controls['courseid']).setValue(data[0].courseid);
      // (<FormControl>this.courseForm.controls['schoolid']).setValue(data[0].schoolid);
      // (<FormControl>this.courseForm.controls['coursename']).setValue(data[0].coursename);
      // (<FormControl>this.courseForm.controls['coursecode']).setValue(data[0].coursecode);
      // (<FormControl>this.courseForm.controls['isactive']).setValue(data[0].isactive);
    })

  }
 //Delete 
 deleteCourse(){
  this.courseService.deleteCourse(this.id).subscribe(
    res => {
      console.log("deleted")
    },
    error=>{
      console.log(error);
    }
  );
}
get updateId(){
  return this.courseForm.get('id').value;
}

  
// table column
tabledatacolumn(){
 this.courseService.tabledatacolumn(this.tableurl).subscribe((res)=>{
  (<FormControl>this.courseForm.controls['courseid']).setValue(res[0].courseid);
  (<FormControl>this.courseForm.controls['schoolid']).setValue(res[0].schoolid);
  (<FormControl>this.courseForm.controls['coursename']).setValue(res[0].coursename);
  (<FormControl>this.courseForm.controls['coursecode']).setValue(res[0].coursecode);
  (<FormControl>this.courseForm.controls['isactive']).setValue(res[0].isactive);

 })
 } 

}
