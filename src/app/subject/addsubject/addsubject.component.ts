import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddsubjectService } from '../addsubject.service';
import { FormControl } from "@angular/forms";
@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.css']
})
export class AddsubjectComponent implements OnInit {

  subjectForm:FormGroup;

    ngOnInit() {
    this.subjectForm=this.formBuilder.group({
      id:[''],
      subjectid:[''],
      schoolid:[''],
      subjectname:[''],
      subjectcode:[''],
      subjectdescription:[''],
      isactive:['']
    })

    
    }

  constructor( private http:HttpClient, private formBuilder:FormBuilder, private addsubjectservice:AddsubjectService) { 
 

  }

  addSubject(){
    this.addsubjectservice.addSubject(this.subjectForm.value).subscribe((res)=>{
    });
  }

  
}
