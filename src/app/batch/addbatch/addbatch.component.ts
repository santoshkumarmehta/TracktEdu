import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-addbatch',
  templateUrl: './addbatch.component.html',
  styleUrls: ['./addbatch.component.css']
})
export class AddbatchComponent implements OnInit {
  batchForm:FormGroup;

  constructor( private formBuilder:FormBuilder, private http:HttpClient, private batchservice:BatchService) { }

  ngOnInit() {
this.batchForm= this.formBuilder.group({
  batchid:[''],
  courseid:[''],
  batchname:[''],
  batchcode:[''],
  isactive:['']
})
  }

  addBatch(){
    this.batchservice.addBatch(this.batchForm.value).subscribe(res=>{

    })
  }

}
