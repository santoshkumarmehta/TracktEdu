import { Component, OnInit,Renderer, ElementRef } from '@angular/core';
import { TopMenuService } from '../top-menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
//  photo = 'url(/assets/loginPageImage/admin.jpg)no-repeat';

  constructor(private _menuService: TopMenuService, private renderer:Renderer, private elRef: ElementRef) { }

  ngOnInit() {
    this._menuService.nav1 = true;
    
  }
  

}
