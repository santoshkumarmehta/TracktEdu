import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
 constructor() { }

  ngOnInit() {
    
  }
 

}
