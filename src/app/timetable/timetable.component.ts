import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimetableService } from './timetable.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {
 @ViewChild("sunday") Sunday: ElementRef;
 @ViewChild("monday") Monday: ElementRef;
 @ViewChild("tuesday") Tuesday: ElementRef;
 @ViewChild("wednesday") Wednesday: ElementRef;
 @ViewChild("thursday") Thursday: ElementRef;
 @ViewChild("friday") Friday: ElementRef;
 @ViewChild("saturday") Saturday: ElementRef;
 
  timetableForm:FormGroup;
  timePeriod:FormGroup;
  t: boolean[]=[];
  days:string[]=[];
  data;
  time: NgbTimeStruct = {hour: 1, minute: 30, second: 30};
  meridian = true;

  constructor(private http:HttpClient, private timetableservice:TimetableService, private formbuilder:FormBuilder) {
   
   }

  ngOnInit() {

    this.timetableForm=this.formbuilder.group({
      templatename:[''],
      templatedescription:[''],
      isactive:[''],
      sunday:[],
      wednesday:[],
      satrday:[],
      monday:[],
      thursday:[],
      tuesday:[],
      friday:[],
     })

     this.timePeriod=this.formbuilder.group({
      time:[''],
      periodno:[''],
      timeduration:['']
     })
  }

  addtimeTable(){
    this.timetableservice.addtimeTable(this.timetableForm.value).subscribe(res=>{
     });
  }
  next(){
    this.days.splice(0);
   
   if(this.Sunday.nativeElement.checked){
     this.days.push("Sunday")

   }
   if(this.Monday.nativeElement.checked){
     this.days.push("Monday");
   }
   if(this.Tuesday.nativeElement.checked){
     this.days.push("Tuesday");
   }
   if(this.Wednesday.nativeElement.checked){
     this.days.push("Wednesday");
   }
   if(this.Thursday.nativeElement.checked){
    this.days.push("Thursday");
  }
   if(this.Friday.nativeElement.checked){
     this.days.push("Friday");
   }
   if(this.Saturday.nativeElement.checked){
    this.days.push("Saturday");
  }
  console.log(this.days);
  }

  toggle(i) {
    this.t[i]=!this.t[i]
  }

  add(){
   
  }

  }
