import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Sidenav1Service {

  sidenavUrl;

  constructor( private appservice:AppService, private http:HttpClient) { 
    this.sidenavUrl= this.appservice.baseurl+'/sidenav1';
  }

  getSidenav(data){
    return this.http.get(this.sidenavUrl,data);
  }

}
