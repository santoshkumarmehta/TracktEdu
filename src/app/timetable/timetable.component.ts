import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimetableService } from './timetable.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {

  timetableForm:FormGroup;

  constructor(private http:HttpClient, private timetableservice:TimetableService, private formbuilder:FormBuilder) { }

  ngOnInit() {

    this.timetableForm=this.formbuilder.group({
      templatename:[''],
      templatedescription:[''],
      isactive:[''],
      sunday:[''],
      wednesday:[''],
      satrday:[''],
      monday:[''],
      thursday:[''],
      tuesday:[''],
      friday:[''],
      starttime:[''],
      noofperiopd:[''],
      timeduration:['']
    })
  }

  addtimeTable(){
    this.timetableservice.addtimeTable(this.timetableForm.value).subscribe(res=>{
     });
     
  }
}
