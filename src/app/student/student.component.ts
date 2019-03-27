import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentService } from './student.service';
import { HttpClient } from '@angular/common/http';
import { FormControl } from "@angular/forms";
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  isReadOnly=true;
  studentForm:FormGroup;
  tableUrl;
  tableData:string [];

  constructor(private formBuilder:FormBuilder, private studentservice:StudentService, private http:HttpClient) { 
    this.tableUrl= this.studentservice.studenturl;
  }

  ngOnInit() {

    this.http.get(this.tableUrl).subscribe(res=>{
      this.tableData= res as string[];
    })

    this.studentForm= this.formBuilder.group({
      studentid:[''],
      schoolid:[''],
      courseid:[''],
      batchid:[''],
      firstname:[''],
      middlename:[''],
      lastname:[''],
      registrationcode:[''],
      dob:['']
    })
  }


  studenttable(){
    this.studentservice.studenttable(this.tableUrl).subscribe(res=>{
      (<FormControl>this.studentForm.controls['studentid']).setValue(res[0].studentid);
      (<FormControl>this.studentForm.controls['schoolid']).setValue(res[0].schoolid);
      (<FormControl>this.studentForm.controls['courseid']).setValue(res[0].courseid);
      (<FormControl>this.studentForm.controls['batchid']).setValue(res[0].batchid);
      (<FormControl>this.studentForm.controls['firstname']).setValue(res[0].firstname);
      (<FormControl>this.studentForm.controls['middlename']).setValue(res[0].middlename);
      (<FormControl>this.studentForm.controls['lastname']).setValue(res[0].lastname);
      (<FormControl>this.studentForm.controls['registrationcode']).setValue(res[0].registrationcode);
      (<FormControl>this.studentForm.controls['dob']).setValue(res[0].dob);
    })
  }
}
