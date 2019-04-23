import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsersService } from './users.service';
import { HttpClient } from '@angular/common/http';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userForm:FormGroup;
  searchData:FormGroup;
  public id;
  isReadOnly = true;
  usersurl;
  userstable:any[]=[];
  constructor(private formBuilder:FormBuilder, private userservice:UsersService, private http:HttpClient) {
    this.usersurl=this.userservice.userurl;
   }
  ngOnInit() {
// for table
this.http.get(this.usersurl).subscribe(res=>{
this.userstable=res as any[];
})

  this.userForm=this.formBuilder.group({
  id:[''],
  firstname:[''],
  middlename:[''],
  lastname:[''],
  emailid:[''],
  doj:[''],
  roles:[''],
  isactive:['']
})

this.searchData=this.formBuilder.group({
  search:['']
})
  }


addUsers(){
  this.userservice.adduser(this.userForm.value).subscribe(res=>{
  })
  window.location.reload();
  }

  editData(id){
    this.userservice.editData(id).subscribe(res=>{
      this.id=res[0].id;
      (<FormControl>this.userForm.controls['id']).setValue(res[0].id);
      (<FormControl>this.userForm.controls['firstname']).setValue(res[0].firstname);
      (<FormControl>this.userForm.controls['middlename']).setValue(res[0].middlename);
      (<FormControl>this.userForm.controls['lastname']).setValue(res[0].lastname);
      (<FormControl>this.userForm.controls['emailid']).setValue(res[0].emailid);
      (<FormControl>this.userForm.controls['doj']).setValue(res[0].doj);
      (<FormControl>this.userForm.controls['roles']).setValue(res[0].roles);
      (<FormControl>this.userForm.controls['isactive']).setValue(res[0].isactive);
    })
  }

  get update() {
    return this.userForm.get('id').value;
  }

  upadtaeData() {
    this.userservice.update(this.update, this.userForm.value).subscribe(res => {
    });
    window.location.reload();
  }

  get deleteId(){
    return this.userForm.get('id').value;
  }
  deleteData() {
    this.userservice.deletedata(this.deleteId).subscribe(res => {
    });
    window.location.reload();
  }

  get search(){
    return this.searchData.get('search');
  }
  retriveData(){
    this.userservice.retriveData(this.search.value).subscribe((res)=>{
    this.userstable= res as any[];
     })
    }
}
