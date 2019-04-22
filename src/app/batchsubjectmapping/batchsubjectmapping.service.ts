import { Injectable } from '@angular/core';
import {AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BatchsubjectmappingService {
  bsmurl;
  constructor(private appservice:AppService, private http:HttpClient) {
    this.bsmurl= this.appservice.baseurl+'/batchsubjectmapping';
  }
  adduser(bsm){
    return this.http.post(this.bsmurl,bsm);
  }
 
  bsmtable(table){
    return this.http.get(this.bsmurl+`?id=${table}`)
    }
 editData(search){
    return this.http.get(this.bsmurl+`?id=${search}`);
   }
   update(id, batchsubjectMappingForm){
    return this.http.patch(this.bsmurl+`/${id}`,batchsubjectMappingForm);
  }
  
  deletedata(id){
    return this.http.delete(this.bsmurl+`/${id}`);
   }
  
   retriveChapter(search){
    return this.http.get(this.bsmurl+`?coursename=${search}`);
  }
  
}
