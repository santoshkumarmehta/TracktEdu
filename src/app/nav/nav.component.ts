import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TopMenuService } from '../top-menu.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

 public Menus = [];
 public tempMenuId=[];
 public id1;
 constructor(private _topMenuService:TopMenuService) { }

  ngOnInit() {
    this.Menus = this._topMenuService.headerMenu;
    this.tempMenuId = this._topMenuService.loginMenuId;
    this._topMenuService.nav1 = true;
  }
 totalAmount = 0.00;
 numberOfProduct = 0;
 traceNav(i){
   
    this._topMenuService.tempId=this.tempMenuId[i];
    this._topMenuService.selectedMenuId = i;
    this._topMenuService.selectedIndex = i;
   
 }

}
