import { Injectable } from '@angular/core';
import { TableModel } from './tablemodel';

@Injectable({
  providedIn: 'root'
})
export class TabledataService {


  constructor() { }
   dataTable: TableModel[] = [
    {sn: 1, name: 'A', marks: 99, status: true},
    {sn: 2, name: 'B', marks: 66, status: true},
    {sn: 3, name: 'C', marks: 45, status: false},
    {sn: 4, name: 'D', marks: 34, status: false},
    {sn: 5, name: 'E', marks: 40, status: false},
    {sn: 6, name: 'F', marks: 60, status: true},
    {sn: 7, name: 'G', marks: 66, status: true},
    {sn: 8, name: 'H', marks: 30,status: false},
    {sn: 9, name: 'I', marks: 90, status: true},
    {sn: 10, name: 'J', marks: 49, status: false},
    {sn: 11, name: 'K', marks: 90, status: true},
    {sn: 12, name: 'L', marks: 50, status: true },
    {sn: 13, name: 'M', marks: 56, status: true},
    {sn: 14, name: 'N', marks: 90, status: true},
    {sn: 15, name: 'M', marks: 40, status: false},
    {sn: 16, name: 'O',  marks: 50, status: true},
    {sn: 17, name: 'P', marks: 70, status: true},
    {sn: 18, name: 'Q', marks: 60 , status: true},
    {sn: 19, name: 'R',  marks: 50,status: true},
    {sn: 20, name: 'S',  marks: 40, status: false},
  ];
  // totalRecord=this.dataTable.length;
  // temp:number=1;
  // recordPerpage:number=5;
  // totalpage:number;
  // pageArray=[];
  // getPageArray(){
  // this.totalpage=~~(this.totalRecord/this.recordPerpage)+1;
  // if(this.temp <= this.totalpage+1){
  //   this.pageArray.push(this.temp);
  //  }
  //  return this.pageArray
  // }
  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 4) {
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);

    // ensure current page isn't out of range
    if (currentPage < 1) { 
        currentPage = 1; 
    } else if (currentPage > totalPages) { 
        currentPage = totalPages; 
    }
     
    let startPage: number, endPage: number;
    if (totalPages <= 10) {
        // less than 10 total pages so show all
        startPage = 1;
        endPage = totalPages;
    } else {
        // more than 10 total pages so calculate start and end pages
        if (currentPage <= 6) {
            startPage = 1;
            endPage = 10;
        } else if (currentPage + 4 >= totalPages) {
            startPage = totalPages - 9;
            endPage = totalPages;
        } else {
            startPage = currentPage - 5;
            endPage = currentPage + 4;
        }
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    // return object with all pager properties required by the view
    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
    };
  }
  getData(){
    return this.dataTable;
  }

}
