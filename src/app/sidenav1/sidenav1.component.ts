import { Component, OnInit, ElementRef,Output, EventEmitter} from '@angular/core';

import { Router } from '@angular/router';
import { Renderer2 } from '@angular/core';


declare var $:any;
@Component({
  selector: 'app-sidenav1',
  templateUrl: './sidenav1.component.html',
  styleUrls: ['./sidenav1.component.css']
})
export class Sidenav1Component implements OnInit {
  
// menus:string="http://localhost:3000/menu";
  constructor( private router:Router,
    private renderer: Renderer2, private el: ElementRef) { 
    
  }
   selectedIndex:number=undefined;
   temp=[];
   t:boolean[]=[];
  
 showHide1(){
   this.router.navigate(['/course']);
}
showHide2(){
  this.router.navigate(['/subject']);
}
showHide3(){
  this.router.navigate(['/batch']);
}
showHide4(){
  this.router.navigate(['/student']);
}
showHide5(){
  this.router.navigate(['/chapter']);
}
  ngOnInit() {
    }

   status: boolean = true;
   
 }
