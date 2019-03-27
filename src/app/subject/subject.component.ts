import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder} from '@angular/forms';
import { FormControl } from "@angular/forms";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {AppService} from '../app.service';
import { AddsubjectService } from './addsubject.service';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
public id;
  subjectForm:FormGroup;
  searchSubject:FormGroup;
  isReadOnly=true;

  tableurl;
  tableData:string [];

  constructor(  private formBuilder:FormBuilder, private addsubjectservice:AddsubjectService,
     private http:HttpClient, private appservice:AppService) {
      this.tableurl=this.addsubjectservice.subjecturl;
     }

  ngOnInit() {
    this.subjectForm=this.formBuilder.group({
      id:[''],
      subjectid:[''],
      schoolid:[''],
      subjectname:[''],
      subjectcode:[''],
      subjectdescription:[''],
      isactive:['']
    })

    this.searchSubject=this.formBuilder.group({
      search:['']
    })
    // for table
    this.http.get(this.tableurl).subscribe(data=>{
      this.tableData=data as string[];
    })
  }

get search(){
  return this.searchSubject.get('search');
  }

  retriveSubject(){
 this.addsubjectservice.retrive(this.search.value).subscribe(res=>{
   this.id=res[0].id;
   (<FormControl>this.subjectForm.controls['id']).setValue(res[0].id);
   (<FormControl>this.subjectForm.controls['subjectid']).setValue(res[0].subjectid);
   (<FormControl>this.subjectForm.controls['schoolid']).setValue(res[0].schoolid);
   (<FormControl>this.subjectForm.controls['subjectname']).setValue(res[0].subjectname);
   (<FormControl>this.subjectForm.controls['subjectcode']).setValue(res[0].subjectcode);
   (<FormControl>this.subjectForm.controls['subjectdescription']).setValue(res[0].subjectdescription);
   (<FormControl>this.subjectForm.controls['isactive']).setValue(res[0].isactive);
 })
  }


  subjectdatacolumn(){
    this.addsubjectservice.subjecttable(this.tableurl).subscribe((res)=>{
      (<FormControl>this.subjectForm.controls['id']).setValue(res[0].id);
      (<FormControl>this.subjectForm.controls['subjectid']).setValue(res[0].subjectid);
      (<FormControl>this.subjectForm.controls['schoolid']).setValue(res[0].schoolid);
      (<FormControl>this.subjectForm.controls['subjectname']).setValue(res[0].subjectname);
      (<FormControl>this.subjectForm.controls['subjectcode']).setValue(res[0].subjectcode);
      (<FormControl>this.subjectForm.controls['subjectdescription']).setValue(res[0].subjectdescription);
      (<FormControl>this.subjectForm.controls['isactive']).setValue(res[0].isactive);
    })
  }

  editData(id){
    this.addsubjectservice.editData(id).subscribe(data=>{
      this.id=data[0].id;
       (<FormControl>this.subjectForm.controls['id']).setValue(data[0].id);
      (<FormControl>this.subjectForm.controls['subjectid']).setValue(data[0].subjectid);
      (<FormControl>this.subjectForm.controls['schoolid']).setValue(data[0].schoolid);
      (<FormControl>this.subjectForm.controls['subjectname']).setValue(data[0].subjectname);
      (<FormControl>this.subjectForm.controls['subjectcode']).setValue(data[0].subjectcode);
      (<FormControl>this.subjectForm.controls['subjectdescription']).setValue(data[0].subjectdescription);
      (<FormControl>this.subjectForm.controls['isactive']).setValue(data[0].isactive);

    })
  }

get updateId(){
  return this.subjectForm.get('id').value;
}
updateSubject(){
    this.addsubjectservice.update(this.updateId, this.subjectForm.value).subscribe(res=>{
      
    })
  }

  deleteSubject(){
    this.addsubjectservice.delete(this.id).subscribe(res=>{
      });
  } 
}
