import { Component, OnInit, ElementRef,Output, EventEmitter} from '@angular/core';
import { DashService } from '../dash.service';
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
  constructor(private dash:DashService, private router:Router,
    private renderer: Renderer2, private el: ElementRef) { 
    
  }
   selectedIndex:number=undefined;
   temp=[];
   t:boolean[]=[];

   MainMenus =['Course Management','Subject Management','Batch Management','Student management'];
 mainMenu1Route=['dashboard/course','dashboard/batch','dashboard/form2','dashboard/addnew'];
  
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
   showHide(){
     this.status = !this.status;  
     this.dash.leftMenuToggler = !this.dash.leftMenuToggler;     
   }
 }
