import { Injectable } from '@angular/core';
import {AppService} from '../app.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddsubjectService {

subjecturl;

constructor(private appService:AppService, private http:HttpClient) {
    this.subjecturl=this.appService.baseurl + '/subject';
   }

 addSubject(subject){
   return this.http.post(this.subjecturl,subject);
 }

 subjecttable(search){
   return this.http.get(this.subjecturl+ `?subjectid=${search}`);
 }

 editData(search){
   return this.http.get(this.subjecturl+`?id=${search}`);
 }

 update(id, subjectForm){
   return this.http.patch(this.subjecturl+`/${id}`, subjectForm);
 }

delete(id){
  return this.http.delete(this.subjecturl+`/${id}`)
}

retrive(search){
 return this.http.get(this.subjecturl+`?id=${search}`);
}
}
