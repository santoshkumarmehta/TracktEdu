import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimetableService } from './timetable.service';
import { FormBuilder, FormGroup, RequiredValidator } from '@angular/forms';
import { FormControl } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { Alert } from 'selenium-webdriver';

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
  periodtime:string[]=[];
  periodno;
  timeduration;
  timepicker;
  time1:Date=new Date();
  // time: NgbTimeStruct = {hour: 1, minute: 30, second: 30};

    public sundayPeriod: string[];
    public mondayPeriod: string[];
    public tuesdayPeriod: string[];
    public wednesdayPeriod: string[];
    public thursdayPeriod: string[];
    public fridayPeriod: string[];
    public saturdayPeriod:string [];
    tempObj;
    tempDay;
    timeTableData;
  constructor(private http:HttpClient,private datePipe:DatePipe, private timetableservice:TimetableService, private formbuilder:FormBuilder) {
   
    this.sundayPeriod=new Array<string>();
    this.mondayPeriod=new Array<string>();
    this.tuesdayPeriod=new Array<string>();
    this.wednesdayPeriod=new Array<string>();
    this.thursdayPeriod=new Array<string>();
    this.fridayPeriod=new Array<string>();
    this.saturdayPeriod=new Array<string>();
  
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
  // console.log(this.days);
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

// get periodState(): boolean{
                
//   if(this.startTime1.nativeElement.time != undefined && this.duration != undefined && this.period != undefined){
//    return true;
//   }else{
//       return false;
//   }
// }

assignPeriodTemplate(){

    // console.log(this.time);
    // console.log(this.time.hour);
    // console.log(this.time.minute);
    // console.log(this.time.second);
    // console.log(this.period);
    // console.log(this.duration);
    
    for(let i=0;i<this.period;i++){
      if((this.time.hour && this.time.minute)>59){
        this.periodtime=this.time.minute+this.duration;
        console.log(this.periodtime);
      }

      // let tempH=this.time.hour;
      // let tempM=this.time.minute;
      // let tempS=this.time.second;
     // console.log(startTime);
      
     if((this.time.minute+this.duration)>59){
      //  if(tempAmPm=="AM" && tempH==11){
      //     tempAmPm="PM";
      //     alert('d');
      //   } else{
      //     tempAmPm="AM";
      //     alert('ff');
      //   }
      this.time.hour= this.time.hour+1;
        if(this.time.hour>12){
          this.time.hour=this.time.hour-12;
        } else {
          this.time.hour=12;
        }
        this.time.minute=this.time.minute+this.duration-60;
      }else{
        this.time.minute=this.time.minute+this.duration;
      }
      let tempHstr:string;
      let tempMstr:string;

      // tempHstr=(tempH<10)?`0${tempH}`:`${tempH}`;
      // tempMstr=(tempM<10)?`0${tempM}`:`${tempM}`;
      // this.tempObj.endTime=tempHstr+":"+tempMstr + " "+ AmPm;
      // startTime=tempHstr+":"+tempMstr + " "+ AmPm;
    }
  }

  setPeriod(days){
    // this.assignPeriodTemplate(days);
    
      switch(days){
        case 'Sunday':{
          console.log('Sunday');
          }
          case 'Monday':{
            console.log('Monday')
          }
          case 'Tuesday':{
            console.log('Tuesday');
          }
          case 'Wednesday':{
            console.log("Wednesday");
          }
          case 'Thursday':{
            console.log("Thursday");
          }
          case 'Friday':{
            console.log("Friday");
          }
          case 'Saturday':{
            console.log("Saturday");
          }
      }
    }
  

}
