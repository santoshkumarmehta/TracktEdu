import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studenturl;
  constructor( private appService:AppService, private http:HttpClient) { 
    this.studenturl=this.appService.baseurl+"/student";
  }

  addStudent(student){
    return this.http.post(this.studenturl,student);
  }
  studenttable(search){
    return this.http.get(this.studenturl+`?studentid=${search}`)
  }

  editData(search){
    return this.http.get(this.studenturl+`?id=${search}`)
  }

update(id, studentForm){
  return this.http.patch(this.studenturl+`/${id}`,studentForm);
}

  delete(id){
    return this.http.delete(this.studenturl+`/${id}`);
  }

  retriveStudent(search){
    return this.http.get(this.studenturl+`?firstname=${search}`);
  }

}
