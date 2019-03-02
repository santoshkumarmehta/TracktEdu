import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { TableModel } from './tablemodel'
import { TabledataService } from './tabledata.service';
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {
  displayedColumns: string[] = ['sn', 'name', 'marks', 'status','result','grade'];
  totalRecord:number=0;
  pageArray=[];
  temp:number;

  // array of all items to be paged
   totalItems: any[];
 
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private data: TabledataService) {
    
   }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    //this.pageArray=this.data.getPageArray();
    this.totalItems = this.data.getData();
     // initialize to page 1
    this.setPage(1);  

     
  }
 
  dataSource = new MatTableDataSource<TableModel>(this.data.dataTable);
    
   
 
  
    
  setPage(page: number) {
    // get pager object from service
    this.pager = this.data.getPager(this.totalItems.length, page);

    // get current page of items
    this.pagedItems = this.totalItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

}
