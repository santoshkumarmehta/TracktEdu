import { Component, OnInit } from '@angular/core';
import { DashService } from '../dash.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {

  constructor(private dash:DashService) { }
  
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
