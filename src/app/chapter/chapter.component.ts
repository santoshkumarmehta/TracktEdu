import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ChapterService } from './chapter.service';
import { HttpClient } from '@angular/common/http';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})

export class ChapterComponent implements OnInit {

  chapterForm: FormGroup;
  searchData:FormGroup;
  tableurl;
  chaptertable: any[]=[];
  public id;
  isReadOnly = true;
  page = 1;
  pageSize=6;
  collectionSize;

  get chapter(){
    return this.chaptertable.map((chapter,i)=>({id:i+1,...chapter}))
    .slice((this.page-1)*this.pageSize+this.pageSize);
  }

  constructor(private formBuilder: FormBuilder, private chapterService: ChapterService, private http: HttpClient) {
    this.tableurl = this.chapterService.chapterUrl;
  }

  ngOnInit() {
    this.http.get(this.tableurl).subscribe(res => {
    this.chaptertable = res as string[];
    this.collectionSize=this.chaptertable.length;
    })
   
    this.chapterForm = this.formBuilder.group({
      id: [''],
      // chapterid: [''],
      subjectid: [''],
      chaptername: [''],
      chspterdscription: [''],
      isactive: ['']
    })

    this.searchData= this.formBuilder.group({
      search:['']
    })

  }

  addChapter(){
    this.chapterService.addChapter(this.chapterForm.value).subscribe(res=>{
      });
      window.location.reload();
  }

  get search(){
    // console.log(this.courseForm.get('search'))
    return this.searchData.get('search');
  }
  retriveCourse(){
  this.chapterService.retriveChapter(this.search.value).subscribe((res)=>{
  this.chaptertable= res as any[];
   })
  }
  editData(id) {
    this.chapterService.editData(id).subscribe(res => {
      this.id=res[0].id;
      (<FormControl>this.chapterForm.controls['id']).setValue(res[0].id);
     
      (<FormControl>this.chapterForm.controls['subjectid']).setValue(res[0].subjectid);
      (<FormControl>this.chapterForm.controls['chaptername']).setValue(res[0].chaptername);
      (<FormControl>this.chapterForm.controls['chspterdscription']).setValue(res[0].chspterdscription);
      (<FormControl>this.chapterForm.controls['isactive']).setValue(res[0].isactive);
    })
  }
  get update() {
    return this.chapterForm.get('id').value;
  }
  upadtaeData() {
    this.chapterService.update(this.update, this.chapterForm.value).subscribe(res => {
    });
    window.location.reload();
  }
  get deleteId(){
    return this.chapterForm.get('id').value;
  }
  deleteData() {
    this.chapterService.deletedata(this.deleteId).subscribe(res => {
    });
    window.location.reload();
  }
}
