import { Component, OnInit } from '@angular/core';
import { TopMenuService } from '../top-menu.service';
import { DashService } from '../dash.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _topMenuService:TopMenuService,private dash:DashService,private childrouter:Router ) { }
  
  ngOnInit() {
    this._topMenuService.nav1 = false;
    this.dash.showLeftMenu=true;
    this.dash.showRightMenu=true;
  }

  
}
