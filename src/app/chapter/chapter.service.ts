import { Injectable  } from '@angular/core';
import {AppService } from '../app.service';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {Chapter} from './chapter.component';
import {CollectionViewer, DataSource} from "@angular/cdk/collections";

@Injectable({
  providedIn: 'root'
})

export class ChapterService {
  
private chapterSubject =new BehaviorSubject<Chapter[]>([]);
private loadingSubject= new BehaviorSubject<boolean>(false);

public loading$=this.loadingSubject.asObservable();

chapterUrl;

  constructor(private appService:AppService, private http:HttpClient) { 
    this.chapterUrl=this.appService.baseurl+'/chapter';
  }

// connect(collectionViewer:CollectionViewer):Observable<Chapter[]>{
//   return this.chapterSubject.asObservable();
// }

// disconnect(collectionViewer:CollectionViewer):void{
//    this.chapterSubject.complete();
//    this.loadingSubject.complete();
// }
// // for table
//  loadChapter(id:number,filter = '', sortDirection = 'asc', pageNumber = 0, pageSize = 3)
//  {

// this.loadingSubject.next(true);


// }

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


// export class ChapterService1 {

//   constructor(private http:HttpClient) {}

//   findChapters(
//       courseId:number, filter = '', sortOrder = 'asc',
//       pageNumber = 0, pageSize = 3):  Observable<Chapter[]> {

//       return this.http.get('/api/lessons', {
//           params: new HttpParams()
//               .set('courseId', courseId.toString())
//               .set('filter', filter)
//               .set('sortOrder', sortOrder)
//               .set('pageNumber', pageNumber.toString())
//               .set('pageSize', pageSize.toString())
//       }).pipe(
//           (res =>  res["payload"])
//       );
//   }
// }
