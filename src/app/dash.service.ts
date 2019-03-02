import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashService {
  showLeftMenu:boolean;
  leftMenuToggler:boolean;
  showRightMenu:boolean;
  
  constructor() { }
  
}
