import { Injectable  } from '@angular/core';
import {AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ChapterService {
  
chapterUrl;

  constructor(private appService:AppService, private http:HttpClient) { 
    this.chapterUrl=this.appService.baseurl+'/chapter';
  }

  addChapter(chapter){
    return this.http.post(this.chapterUrl,chapter)
  }
 
  chaptertable(table){
    return this.http.get(this.chapterUrl+`?chapterid=${table}`);
  }

  editData(search){
    return this.http.get(this.chapterUrl+`?id=${search}`);
  }

  update(id, chapterForm){
    return this.http.patch(this.chapterUrl+`/${id}`,chapterForm)
  }

  deletedata(id){
   return this.http.delete(this.chapterUrl+`/${id}`);
  }

  retriveChapter(search){
    return this.http.get(this.chapterUrl+`?chaptername=${search}`);
  }

}
