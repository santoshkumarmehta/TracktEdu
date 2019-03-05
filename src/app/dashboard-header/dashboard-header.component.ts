import { Component, OnInit } from '@angular/core';
import { DashService } from '../dash.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {
 
  constructor(private dash:DashService, private modalService: NgbModal) { }
  
  ngOnInit() {
    this.dash.leftMenuToggler=true;
  }
  showHide(){
          this.dash.showLeftMenu=!this.dash.showLeftMenu;
          this.dash.leftMenuToggler=true;
  }
  showRightMenu1(){
    this.dash.showRightMenu=!this.dash.showRightMenu;
  }

}
