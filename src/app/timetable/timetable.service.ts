import { Injectable } from '@angular/core';
import {AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  timetableurl;
  periodurl;
  constructor(private http:HttpClient, private appservice:AppService) { 
    this.timetableurl= this.appservice.baseurl+'/timetable';
    this.periodurl=this.appservice.baseurl+'/periodtable';
  }
addtimeTable(timetable){
  return this.http.post(this.timetableurl,timetable);
}

addperiod(period){
  return this.http.post(this.periodurl,period);
}
}
