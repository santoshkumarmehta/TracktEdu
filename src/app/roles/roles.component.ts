import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RolesService } from './roles.service';
import { HttpClient } from '@angular/common/http';
import { FormControl } from "@angular/forms";
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  rolesForm:FormGroup;
  searchData:FormGroup;
  isReadOnly=true;
  rolesurl;
  roletable;
  public id;
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

this.searchData=this.formBuilder.group({
  search:['']
})
  }

  addRoles(){
    this.roleservice.adduser(this.rolesForm.value).subscribe(res=>{
    })
    window.location.reload();
  }
// edit
editData(id){
  this.roleservice.editData(id).subscribe(res=>{
    this.id=res[0].id;
    (<FormControl>this.rolesForm.controls['id']).setValue(res[0].id);
    (<FormControl>this.rolesForm.controls['rolename']).setValue(res[0].rolename);
    (<FormControl>this.rolesForm.controls['roledescription']).setValue(res[0].roledescription);
    (<FormControl>this.rolesForm.controls['isactive']).setValue(res[0].isactive);
    
  })
}

get update() {
  return this.rolesForm.get('id').value;
}
upadtaeData(){
   this.roleservice.update(this.update, this.rolesForm.value).subscribe(res => {
  });
  window.location.reload();
}

deleteData(){
  this.roleservice.deletedata(this.update).subscribe(res => {
  });
  window.location.reload();
}

get search(){
  return this.searchData.get('search');
}
retriveData(){
  this.roleservice.retriveData(this.search.value).subscribe((res)=>{
  this.roletable= res as any[];
   })
  }

}
