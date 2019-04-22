import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormControl } from "@angular/forms";
import { BatchsubjectmappingService } from './batchsubjectmapping.service';

@Component({
  selector: 'app-batchsubjectmapping',
  templateUrl: './batchsubjectmapping.component.html',
  styleUrls: ['./batchsubjectmapping.component.css']
})
export class BatchsubjectmappingComponent implements OnInit {

  batchsubjectMappingForm:FormGroup;
  searchData:FormGroup;
  bsmurl;
  bsmtable:any[]=[];
  public id;
  isReadOnly=true;

  constructor(private formBuilder:FormBuilder, private bsm:BatchsubjectmappingService, private http:HttpClient){
    this.bsmurl=this.bsm.bsmurl;
  }
  ngOnInit() {
// for table
    this.http.get(this.bsmurl).subscribe(res=>{
     this.bsmtable=res as any[];
    })

    this.batchsubjectMappingForm=this.formBuilder.group({
      id:[''],
      coursename:[''],
      batchname:[''],
      subjectname:['']
    })
this.searchData=this.formBuilder.group({
  search:['']
})

  }

  addBSM(){
    this.bsm.adduser(this.batchsubjectMappingForm.value).subscribe(res=>{
    })
    window.location.reload();
  }
  
  editData(id){
    this.bsm.editData(id).subscribe(res=>{
      this.id=res[0].id;
      (<FormControl>this.batchsubjectMappingForm.controls['id']).setValue(res[0].id);
      (<FormControl>this.batchsubjectMappingForm.controls['coursename']).setValue(res[0].coursename);
      (<FormControl>this.batchsubjectMappingForm.controls['batchname']).setValue(res[0].batchname);
      (<FormControl>this.batchsubjectMappingForm.controls['subjectname']).setValue(res[0].subjectname);
      
    })
  }

  get update() {
    return this.batchsubjectMappingForm.get('id').value;
  }

  upadtaeData() {
    this.bsm.update(this.update, this.batchsubjectMappingForm.value).subscribe(res => {
    });
    window.location.reload();
  }

  deleteData() {
    this.bsm.deletedata(this.update).subscribe(res => {
    });
    window.location.reload();
  }

  get search(){
    return this.searchData.get('search');
  }
  retriveCourse(){
    this.bsm.retriveChapter(this.search.value).subscribe((res)=>{
    this.bsmtable= res as any[];
     })
    }
}
