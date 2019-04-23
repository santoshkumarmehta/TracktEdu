import { Injectable } from '@angular/core';
import {AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  timetableurl;
  constructor(private http:HttpClient, private appservice:AppService) { 
    this.timetableurl= this.appservice.baseurl+'/timetable';
  }
}
