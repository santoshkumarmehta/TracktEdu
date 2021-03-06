import { Component, OnInit,EventEmitter, Output } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MenusComponent } from '../menus/menus.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {


  @Output() public sidenavToggle= new EventEmitter();
  
  public onToggleSidenav=()=>{
    this.sidenavToggle.emit();
  }

  constructor( private modalService: MatDialog) { }

  // menus:string="http://localhost:3000/menu";
  
  openDialog(){
   const dialogRef=this.modalService.open(MenusComponent,{
    width:'68%',
    height:'520px',
    maxHeight:'700px',
    maxWidth:'100%'
   })
 
  }

  ngOnInit() {
  
  }

  //showRightMenu1(){ 
 //   this.dash.showRightMenu=!this.dash.showRightMenu;
  // }

}
