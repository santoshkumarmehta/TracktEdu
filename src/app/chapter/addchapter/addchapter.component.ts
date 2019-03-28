import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ChapterService } from '../chapter.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-addchapter',
  templateUrl: './addchapter.component.html',
  styleUrls: ['./addchapter.component.css']
})
export class AddchapterComponent implements OnInit {

  chapterForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private chapterservice:ChapterService, private http:HttpClient) { }

  ngOnInit() {
    this.chapterForm=this.formBuilder.group({
      chapterid:[''],
      subjectid:[''],
      chaptername:[''],
      chspterdscription:[''],
      isactive:['']
    })
  }

  addChapter(){
    this.chapterservice.addChapter(this.chapterForm.value).subscribe(res=>{
      
    })
  }
}
