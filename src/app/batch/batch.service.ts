import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  batchUrl:string;

  constructor(private appService:AppService, private http:HttpClient) { 
    this.batchUrl=this.appService.baseurl+'/batch';
  }

  addBatch(batch){
    return this.http.post(this.batchUrl, batch);
  }

  batchTable(search){
    return this.http.get(this.batchUrl+`?batchid=${search}`);
  }

  editData(search){
    return this.http.get(this.batchUrl+`?batchname=${search}`);
  }

  updateData(id, form){
return this.http.patch(this.batchUrl+`/${id}`, form);
  }

  deleteData(id){
    return this.http.delete(this.batchUrl+`/${id}`);
  }

  retriveCOurse(search){
    return this.http.get(this.batchUrl+`?batchname=${search}`);
  }

}
