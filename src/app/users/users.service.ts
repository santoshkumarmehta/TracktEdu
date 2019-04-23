import { Injectable } from '@angular/core';
import {AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

userurl;

  constructor(private appservice:AppService,private http:HttpClient) {
  this.userurl=this.appservice.baseurl+'/users';
 }

 adduser(user){
   return this.http.post(this.userurl,user);
 }

usertable(table){
return this.http.get(this.userurl+`?id=${table}`)
}

editData(search){
  return this.http.get(this.userurl+`?id=${search}`);
}

update(id, userForm){
  return this.http.patch(this.userurl+`/${id}`,userForm);
}

deletedata(id){
  return this.http.delete(this.userurl+`/${id}`);
 }

 retriveData(search){
  return this.http.get(this.userurl+`?firstname=${search}`);
}

}
