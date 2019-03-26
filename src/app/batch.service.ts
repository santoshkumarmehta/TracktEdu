import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';



const batch = [
  { title: 'Install Angular CLI'},
  { title: 'Style app'},
  { title: 'Finish service functionality'},
  { title: 'Setup API'},
];

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  constructor( private appservice:AppService, private http:HttpClient) {
this.courseurl=this.appservice.baseurl+ '/batch';

   }

  courseurl:string;

  // get() {
  //   return new Promise(resolve => 
  //     resolve(batch));
  // }

  // add(data){
    
  //    return new Promise(resolve=>{
  //      batch.push(data);
  //      resolve(data);
  //    })
  // }
}
