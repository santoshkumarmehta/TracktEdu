import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddcourseService{

  constructor(private appservice:AppService, private http:HttpClient) {
    this.courseurl=this.appservice.baseurl+'/course';
   }

  courseurl:string;

  addCourse(course){
    return this.http.post(this.courseurl,course);
  }

  

}
