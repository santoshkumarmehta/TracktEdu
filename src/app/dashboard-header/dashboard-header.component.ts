import { Component, OnInit } from '@angular/core';
import { DashService } from '../dash.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MenusComponent } from '../menus/menus.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {
 
  constructor(private dash:DashService, private modalService: MatDialog) { }

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
    this.dash.leftMenuToggler=true;
  }
  showHide(){
          this.dash.showLeftMenu=!this.dash.showLeftMenu;
        this.dash.leftMenuToggler=true;
  }
  // showRightMenu1(){ 
  //   this.dash.showRightMenu=!this.dash.showRightMenu;
  // }

}
