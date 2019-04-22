import { Injectable } from '@angular/core';
import {AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RolesService {
roleurl;
  constructor(private http:HttpClient, private rolesservice:AppService) { 
    this.roleurl=this.rolesservice.baseurl+'/roles';
  }

  adduser(bsm){
    return this.http.post(this.roleurl,bsm);
  }
 
  roletable(table){
    return this.http.get(this.roleurl+`?id=${table}`)
    }
    
 editData(search){
    return this.http.get(this.roleurl+`?id=${search}`);
   }
   update(id, rolesForm){
    return this.http.patch(this.roleurl+`/${id}`,rolesForm);
  }
  
  deletedata(id){
    return this.http.delete(this.roleurl+`/${id}`);
   }
  
   retriveChapter(search){
    return this.http.get(this.roleurl+`?coursename=${search}`);
  }
  
}
