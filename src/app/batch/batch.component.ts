import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BatchService } from './batch.service';
import { FormControl } from "@angular/forms";


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
  tableBatch:string [];
  batchUrl;
  constructor( private formBuilder:FormBuilder, private http:HttpClient, private batchService:BatchService) {
this.batchUrl=this.batchService.batchUrl;
   }

  ngOnInit() {
this.http.get(this.batchUrl).subscribe(data=>{
  this.tableBatch=data as string[];
})

this.batchForm= this.formBuilder.group({
    id:[''],
    batchid:[''],
    courseid:[''],
    batchname:[''],
    batchcode:[''],
    isactive:['']
   })
this.searchData=this.formBuilder.group({
  search:['']
})
  }

batchColumnData(){
  this.batchService.batchTable(this.batchUrl).subscribe(res=>{
    (<FormControl>this.batchForm.controls['id']).setValue(res[0].id);
    (<FormControl>this.batchForm.controls['batchid']).setValue(res[0].batchid);
    (<FormControl>this.batchForm.controls['courseid']).setValue(res[0].courseid);
    (<FormControl>this.batchForm.controls['batchname']).setValue(res[0].batchname);
    (<FormControl>this.batchForm.controls['batchcode']).setValue(res[0].batchcode);
    (<FormControl>this.batchForm.controls['isactive']).setValue(res[0].isactive);
  })
}
editData(id){
  this.batchService.editData(id).subscribe(res=>{
    this.id=res[0].id;
    (<FormControl>this.batchForm.controls['id']).setValue(res[0].id);
    (<FormControl>this.batchForm.controls['batchid']).setValue(res[0].batchid);
    (<FormControl>this.batchForm.controls['courseid']).setValue(res[0].courseid);
    (<FormControl>this.batchForm.controls['batchname']).setValue(res[0].batchname);
    (<FormControl>this.batchForm.controls['batchcode']).setValue(res[0].batchcode);
    (<FormControl>this.batchForm.controls['isactive']).setValue(res[0].isactive);
  })
}

get search(){
  // console.log(this.courseForm.get('search'))
  return this.searchData.get('search');
}
retriveCourse(){
this.batchService.retriveCOurse(this.search.value).subscribe((res)=>{
console.log(res[0]);
this.id=res[0].id;
(<FormControl>this.batchForm.controls['id']).setValue(res[0].id);
  (<FormControl>this.batchForm.controls['batchid']).setValue(res[0].batchid);
  (<FormControl>this.batchForm.controls['courseid']).setValue(res[0].courseid);
    (<FormControl>this.batchForm.controls['batchname']).setValue(res[0].batchname);
    (<FormControl>this.batchForm.controls['batchcode']).setValue(res[0].batchcode);
    (<FormControl>this.batchForm.controls['isactive']).setValue(res[0].isactive);
 })
}

get update(){
  return this.batchForm.get('id').value;
}

updaeData(){
  this.batchService.updateData(this.update, this.batchForm.value).subscribe(res=>{

  })
}

deleteData(){
  this.batchService.deleteData(this.id).subscribe(res=>{
    
  })
}
}
