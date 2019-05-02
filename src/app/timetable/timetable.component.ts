import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimetableService } from './timetable.service';
import { FormBuilder, FormGroup, RequiredValidator } from '@angular/forms';
import { FormControl } from "@angular/forms";
import { DatePipe } from "@angular/common";
import {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css'],
  providers: [DatePipe]
})

export class TimetableComponent implements OnInit {
 @ViewChild("sunday") Sunday: ElementRef;
 @ViewChild("monday") Monday: ElementRef;
 @ViewChild("tuesday") Tuesday: ElementRef;
 @ViewChild("wednesday") Wednesday: ElementRef;
 @ViewChild("thursday") Thursday: ElementRef;
 @ViewChild("friday") Friday: ElementRef;
 @ViewChild("saturday") Saturday: ElementRef;
 @ViewChild("timepicker") TimePicker:ElementRef;
 @ViewChild("startTime") startTime1: ElementRef;
 @Input("day") day: string;

  timetableForm:FormGroup;
  periodForm:FormGroup;
  t: boolean[]=[];
   days:string[]=[];
   periodtime:{}=[];
   periodetimeminute:any[]=[];
  periodno;
  timeduration;
  timepicker;
  meridian=true;
   
  constructor(private config:NgbTimepickerConfig,private http:HttpClient,private datePipe:DatePipe, private timetableservice:TimetableService, private formbuilder:FormBuilder) {
   
    config.spinners=false;
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
       });
       this.periodForm=this.formbuilder.group({
        time1:[''],
        periodno:[''],
        timeduration:['']
       });

  }

  // addtimeTable(){
  //    this.timetableservice.addtimeTable(this.periodForm.value).subscribe(res=>{
  //     });
  //  }
   
  next(){
      
    this.days.splice(0);
   
   if(this.Sunday.nativeElement.checked){
     this.days.push("Sunday");
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
 
  }

  toggle(i) {
    this.t[i]=!this.t[i]
  }


get period(){
  return this.periodForm.get('periodno').value;
}
get time(){
  return this.periodForm.get('time1').value;
}
get duration(){
  return this.periodForm.get('timeduration').value;
}

assignPeriodTemplate(){
 
  let time=this.time;
  let hour=this.time.hour;
  let minute=this.time.minute;
    for(let i=1;i<this.period;i++){

      if(minute+this.duration>=59){
        minute=minute+this.duration;
        if(minute>=59 ){
           hour+=1;
           hour=hour%12;
          //  this.periodtimehour=hour;
          minute=minute%60;
          this.periodtime=hour+":"+ minute;
        }
      }
     
      

      }
    
    }
  
  
}
