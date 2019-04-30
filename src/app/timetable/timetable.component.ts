import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimetableService } from './timetable.service';
import { FormBuilder, FormGroup, RequiredValidator } from '@angular/forms';
import { FormControl } from "@angular/forms";
import { DatePipe } from "@angular/common";

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
  val;
  // time: NgbTimeStruct = {hour: 1, minute: 30, second: 30};
  meridian = true;
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
        time:[''],
        periodno:[''],
        timeduration:['']
       });

       (<FormControl>this.periodForm.controls['time']).setValue("09:30 AM");
  }

  // addtimeTable(){
  //    this.timetableservice.addtimeTable(this.periodForm.value).subscribe(res=>{
  //     });
  //  }
   
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
  // console.log(this.days);
  }

  toggle(i) {
    this.t[i]=!this.t[i]
  }

  add(){
  //   this.timepicker=(<FormControl>this.periodForm.controls['time']).value;
  //   this.periodno=(<FormControl>this.periodForm.controls['periodno']).value;
  //   this.timeduration=(<FormControl>this.periodForm.controls['timeduration']).value;
   
  //   console.log(Object.values(this.timepicker));
  //  console.log(this.periodno);
  //  console.log(this.timeduration);

  // var time:any[]=Object.values(this.timepicker);
  //   var pp=this.periodno;
  //   for(var i=0;i<pp;i++){
     
  //      }
  console.log(this.period);
  console.log(this.time);
     }

get period(){
  return this.periodForm.get('periodno').value;
}
get time(){
  return this.periodForm.get('time').value;
}
get duration(){
  return this.periodForm.get('timeduration').value;
}

get periodState(): boolean{
                
  if(this.startTime1.nativeElement.time != undefined && this.duration != undefined && this.period != undefined){
   return true;
  }else{
      return false;
  }
}

assignPeriodTemplate(days){
  if(this.periodState){
    console.log('assign period');
    let startTime=this.datePipe.transform(this.startTime1.nativeElement.time,'hh:mm am');
    let tempH=parseInt(this.datePipe.transform(this.startTime1.nativeElement.time,'hh'));
    let tempM=parseInt(this.datePipe.transform(this.startTime1.nativeElement.time, 'mm'));
    let AmPm= this.datePipe.transform(this.startTime1.nativeElement.time,'am');
    let duration=parseInt(this.duration);
    let period=this.period;

    for(let i=0;i<period;i++){
      this.tempObj={};
      this.tempObj.periodName="period"+(i+1);
      this.tempObj.startTime=startTime;

      if((tempM+duration)>59){
        if(AmPm=="AM" && tempH==11){
          AmPm="PM";
        } else if(AmPm=="PM" && tempH==11){
          AmPm="AM";
        }
        tempH= tempH+1;
        if(tempH>12){
          tempH=tempH-12;
        } else if(tempH==0){
          tempH=12;
        }
        tempM=tempM+duration-60;
      }else{
        tempM=tempM+duration;
      }
      let tempHstr:string;
      let tempMstr:string;

      tempHstr=(tempH<10)?`0${tempH}`:`${tempH}`;
      tempMstr=(tempM<10)?`0${tempM}`:`${tempM}`;
      this.tempObj.endTime=tempHstr+":"+tempMstr + " "+ AmPm;
      startTime=tempHstr+":"+tempMstr + " "+ AmPm;
    }
  }
}
  setPeriod(days){
    this.assignPeriodTemplate(days);
    if(this.periodState){
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

}
