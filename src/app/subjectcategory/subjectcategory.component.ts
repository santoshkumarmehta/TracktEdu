import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {SubjectcategoryService} from './subjectcategory.service';
import { HttpClient } from '@angular/common/http';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-subjectcategory',
  templateUrl: './subjectcategory.component.html',
  styleUrls: ['./subjectcategory.component.css']
})

export class SubjectcategoryComponent implements OnInit {
  subjectCategoryForm:FormGroup;
  searchSubjectCategory:FormGroup;
  public id;
  tabledata: any[];
  isReadOnly=true;

  
  constructor(private formBuilder:FormBuilder,private http:HttpClient, private subjectcategoryservice:SubjectcategoryService) { }

  ngOnInit() {

    this.http.get(this.subjectcategoryservice.subjecatctaegoryUrl).subscribe(res=>{
      this.tabledata=res as any[];
    })

   this.subjectCategoryForm=this.formBuilder.group({
    id:[''],
    subjectCategorycode:[''],
    subjectCategoryname:[''],
    subjectCategorydescription:[''],

   });

   this.searchSubjectCategory=this.formBuilder.group({
    search:['']
   });


  }

  addsubjectCategory(){
   this.subjectcategoryservice.addSubject(this.subjectCategoryForm.value).subscribe(res=>{
   });
  window.location.reload();
  }

  editData(id){
 this.subjectcategoryservice.editData(id).subscribe(res=>{
  this.id=res[0].id;
  (<FormControl>this.subjectCategoryForm.controls['id']).setValue(res[0].id);
  (<FormControl>this.subjectCategoryForm.controls['subjectCategorycode']).setValue(res[0].subjectCategorycode);
  (<FormControl>this.subjectCategoryForm.controls['subjectCategoryname']).setValue(res[0].subjectCategoryname);
  (<FormControl>this.subjectCategoryForm.controls['subjectCategorydescription']).setValue(res[0].subjectCategorydescription);
  })
  }

  get updateId(){
    return this.subjectCategoryForm.get('id').value;
  }
  updateSubjeccategoryt(){
    this.subjectcategoryservice.update(this.updateId,this.subjectCategoryForm.value).subscribe(res=>{
      });
      window.location.reload();
  };

  deleteSubjectctaegory(){
    this.subjectcategoryservice.delete(this.id).subscribe(res=>{
    });
    window.location.reload();
  };

  get search(){
    return this.searchSubjectCategory.get('search');
    };

    retriveSubjectCategory(){
    this.subjectcategoryservice.retrive(this.search.value).subscribe(res=>{
       this.tabledata=res as any[];
    });
  };
}
