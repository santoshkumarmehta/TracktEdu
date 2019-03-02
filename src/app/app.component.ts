import { Component } from '@angular/core';

import { TopMenuService } from './top-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rubuha';
  selectedId:number;
  constructor(private _topMenuService:TopMenuService ){}
  ngOnInit() {
    this.selectedId = this._topMenuService.selectedMenuId;
  }
  
  
}
