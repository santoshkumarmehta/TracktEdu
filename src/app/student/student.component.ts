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
  searchData:FormGroup;
  tableUrl;
  tableData:any [];
  public id;
  constructor(private formBuilder:FormBuilder, private studentservice:StudentService, private http:HttpClient) { 
    this.tableUrl= this.studentservice.studenturl;
  }

  ngOnInit() {

    this.http.get(this.tableUrl).subscribe(res=>{
      this.tableData= res as any[];
    })

    this.studentForm= this.formBuilder.group({
      id:[''],
      // studentid:[''],
      schoolid:[''],
      courseid:[''],
      batchid:[''],
      firstname:[''],
      middlename:[''],
      lastname:[''],
      registrationcode:[''],
      dob:['']
    })

    this.searchData=this.formBuilder.group({
      search:['']
    })


  }


  addData(){
    this.studentservice.addStudent(this.studentForm.value).subscribe(res=>{
    });
    window.location.reload();
  }

  editData(id){
    this.studentservice.editData(id).subscribe(res=>{
      this.id= res[0].id;
      (<FormControl>this.studentForm.controls['id']).setValue(res[0].id);
      // (<FormControl>this.studentForm.controls['studentid']).setValue(res[0].studentid);
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

  get updateId(){
    return this.studentForm.get('id').value;
  }
  updtaeData(){
      this.studentservice.update(this.updateId, this.studentForm.value).subscribe(res=>{
    });
    window.location.reload();
  }

  deleteData(){
    this.studentservice.delete(this.id).subscribe(res=>{
      });
      window.location.reload();
  }


get search(){
  // console.log(this.courseForm.get('search'))
  return this.searchData.get('search');
}
retriveCourse(){
this.studentservice.retriveStudent(this.search.value).subscribe((res)=>{
this.tableData= res as any[];
 });
}

}
