import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ChapterService } from './chapter.service';
import { HttpClient } from '@angular/common/http';
import { FormControl } from "@angular/forms";
import {MatPaginator, MatTableDataSource} from '@angular/material';

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



  constructor(private formBuilder: FormBuilder, private chapterService: ChapterService, private http: HttpClient) {
    this.tableurl = this.chapterService.chapterUrl;
  }

  ngOnInit() {
    // for table
    this.http.get(this.tableurl).subscribe(res => {
    this.chaptertable = res as string[];
    })
   
    this.chapterForm = this.formBuilder.group({
      id: [''],
      subjectid: [''],
      chaptername: [''],
      chspterdscription: [''],
      isactive: ['']
    })

    this.searchData= this.formBuilder.group({
      search:['']
    })

    // for page
    this.dataSource.paginator = this.paginator;
  
  }

  displayedColumns: string[] = ['id', 'subjectid', 'chaptername', 'chspterdscription','isactive'];
  dataSource = new MatTableDataSource(this.chaptertable);
  @ViewChild(MatPaginator) paginator: MatPaginator;

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
