import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseurl:string;
 constructor( private appservice:AppService, private http:HttpClient) { 
   this.courseurl=this.appservice.baseurl+'/course';
    }

    addCourse(course){
      return this.http.post(this.courseurl,course);
    }

    // retrive(){
    //   return this.http.post(this.url,course);
    // }
}
