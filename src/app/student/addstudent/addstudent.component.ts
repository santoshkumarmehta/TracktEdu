import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentService } from '../student.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  studentForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private studentservice:StudentService, private http:HttpClient) { }

  ngOnInit() {
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

  addData(){
    this.studentservice.addStudent(this.studentForm.value).subscribe(res=>{
      
    })
  }

}
