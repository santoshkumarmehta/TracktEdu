import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RolesService } from './roles.service';
import { HttpBackend, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  rolesForm:FormGroup;
  isReadOnly=true;
  rolesurl;
  roletable;
  
  constructor(private formBuilder:FormBuilder, private roleservice:RolesService, private http:HttpClient) {
    this.rolesurl=this.roleservice.roleurl;
   }

  ngOnInit() {
    // for table
    this.http.get(this.rolesurl).subscribe(res=>{
      this.roletable=res as any[];
     })
  this.rolesForm=this.formBuilder.group({
  id:[''],
  rolename:[''],
  roledescription:[''],
  isactive:['']
})

  }

  addRoles(){
    this.roleservice.adduser(this.rolesForm.value).subscribe(res=>{
    })
    window.location.reload();
  }
}
