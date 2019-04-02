import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BatchService } from './batch.service';
import { FormControl } from "@angular/forms";
import {CourseService } from '../course/course.service';

@Component({
  selector: 'app-batch', 
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css'],
})

export class BatchComponent implements OnInit {
  isReadOnly=true;
  batchForm:FormGroup;
  searchData:FormGroup;
  public id;
  // tableBatch:string [];
  batchUrl;
  searchdata:any[];
  dropDownData:any[];
  courseUrl;

  constructor( private formBuilder:FormBuilder, private http:HttpClient, private batchService:BatchService, private courseurl:CourseService) {
  this.batchUrl=this.batchService.batchUrl;
  this.courseUrl=this.courseurl.courseurl;
   }
   0
  ngOnInit() {

this.http.get(this.batchUrl).subscribe(data=>{
  this.searchdata=data as any[];
})

this.http.get(this.courseUrl).subscribe(data=>{
  this.dropDownData= data as any[];
})

this.batchForm= this.formBuilder.group({
    id:[''],
    courseid:[''],
    batchname:[''],
    coursename:[''],
    batchcode:[''],
    batchdescription:[''],
    isactive:['']
   })
this.searchData=this.formBuilder.group({
  search:['']
})

// if(this.searchdata=this.searchdata){
// }
  }

  addBatch(){
    this.batchService.addBatch(this.batchForm.value).subscribe(res=>{
      window.location.reload();
    })
  }

  dropdownData(){
    this.batchService.dropdown(this.courseUrl).subscribe(data=>{
        this.dropDownData=data as any[];
        (<FormControl>this.batchForm.controls['coursename']).setValue(data[0].coursename);
     })
  }

// batchColumnData(){
//   this.batchService.batchTable(this.batchUrl).subscribe(res=>{
//     (<FormControl>this.batchForm.controls['id']).setValue(res[0].id);
//     (<FormControl>this.batchForm.controls['coursename']).setValue(res[0].coursename);
//     (<FormControl>this.batchForm.controls['courseid']).setValue(res[0].courseid);
//     (<FormControl>this.batchForm.controls['batchname']).setValue(res[0].batchname);
//     (<FormControl>this.batchForm.controls['batchcode']).setValue(res[0].batchcode);
//     (<FormControl>this.batchForm.controls['batchdescription']).setValue(res[0].batchdescription);
//     (<FormControl>this.batchForm.controls['isactive']).setValue(res[0].isactive);
//   })
// }
editData(id){
  this.batchService.editData(id).subscribe(res=>{
    this.id=res[0].id;
    (<FormControl>this.batchForm.controls['id']).setValue(res[0].id);
    (<FormControl>this.batchForm.controls['coursename']).setValue(res[0].coursename);
    (<FormControl>this.batchForm.controls['courseid']).setValue(res[0].courseid);
    (<FormControl>this.batchForm.controls['batchname']).setValue(res[0].batchname);
    (<FormControl>this.batchForm.controls['batchcode']).setValue(res[0].batchcode);
    (<FormControl>this.batchForm.controls['batchdescription']).setValue(res[0].batchdescription);
    (<FormControl>this.batchForm.controls['isactive']).setValue(res[0].isactive);
  })
}

get search(){
 return this.searchData.get('search');
}
retriveCourse(){
this.batchService.retriveCOurse(this.search.value).subscribe((res)=>{

this.searchdata= res as any [];
// alert(this.searchdata);
 })
} 
get update(){
  return this.batchForm.get('id').value;
  
}

updaeData(){
  this.batchService.updateData(this.update, this.batchForm.value).subscribe(res=>{

  })
  window.location.reload();
}

deleteData(){
  this.batchService.deleteData(this.id).subscribe(res=>{
   })
  window.location.reload();
}
}
