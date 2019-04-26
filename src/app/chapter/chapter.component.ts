import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ChapterService } from './chapter.service';
import { HttpClient } from '@angular/common/http';
import { FormControl } from "@angular/forms";
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { Observable } from 'rxjs';


// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
//   // isactive:boolean;
// }

export interface Chapter{
  id:number;
  subjectid:number;
  chaptername:string;
  chspterdscription:string;
  isactive:boolean;
}

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
     this.chaptertable = [];
  }



   
  // for Pagination
  //  displayedColumns: string[] = ['name', 'position', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

   ngOnInit() {

    // for page
    // this.dataSource.paginator = this.paginator;
    // for table
    this.http.get(this.tableurl).subscribe(res => {
    this.chaptertable = res as any[];
    })
    // this.getChapterData().subscribe(res =>{
    //   this.data = res as [];
    //   // console.log(this.data);
    // });
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

    }
    // getChapterData():  Observable<[]> {
    //   return this.http.get<[]>(this.tableurl);
    // }
  
    // displayedColumns: string[] = ["id", "subjectid", "chaptername", "chspterdscription","isactive"];
    // dataSource = new MatTableDataSource(this.data);
    //  @ViewChild(MatPaginator) paginator: MatPaginator;
  
        
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

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
//   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
//   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
//   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
//   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
//   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
//   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
//   {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
//   {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
//   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
// ];