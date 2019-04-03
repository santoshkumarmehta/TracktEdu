import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SubjectcategoryService {

  subjecatctaegoryUrl;

  constructor(private appservice:AppService, private http:HttpClient) { 
    this.subjecatctaegoryUrl=this.appservice.baseurl+'/subject_category';
  }

  addSubject(subject){
    return this.http.post(this.subjecatctaegoryUrl,subject);
  }
 
  editData(search){
    return this.http.get(this.subjecatctaegoryUrl+`?id=${search}`);
  }

  subjecttable(search){
    return this.http.get(this.subjecatctaegoryUrl+ `?subjectCategoryname=${search}`);
  }


 update(id, subjectCategoryForm){
  return this.http.patch(this.subjecatctaegoryUrl+`/${id}`, subjectCategoryForm);
}

delete(id){
 return this.http.delete(this.subjecatctaegoryUrl+`/${id}`)
}

retrive(search){
return this.http.get(this.subjecatctaegoryUrl+`?subjectCategoryname=${search}`);
}
}
