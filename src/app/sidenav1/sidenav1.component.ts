import { Component, OnInit, ElementRef, ViewChild, Directive} from '@angular/core';
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
  constructor(private dash:DashService, private childrouter:Router,
     private renderer: Renderer2, private el: ElementRef) { 
    
  }
  selectedIndex:number=undefined;
  temp=[];
  t:boolean[]=[];

  MainMenus =['Home','About','Contact','Product'];
  subMenus1 =['Table','Form','Form2','Add New'];
  subMenus2 = ['Bmenu1','Bmenu2','Bmenu3'];
  subMenus3 = ['Cmenu1','Cmenu2','Cmenu3'];
  submenu =['Product1','Product2','Product3'];
  mainMenu1Route=['dashboard/table1','dashboard/form1','dashboard/form2','dashboard/addnew'];
  
  ngOnInit() {
    
     $(document).ready(function(){

            $('.menuH','.nav-side-menu ul li').on('click',function() {
            $(this).closest('li').toggleClass('hover').siblings().removeClass('hover');
            });
    });

  }
 // show1:string = 'show1';

// changeStyle($event){
//   this.show1 = $event.type == 'mouseover' ? 'show1' : '';
// }
 
  // flag1:boolean = true;
  status: boolean = true;
  showHide(){
    this.status = !this.status;  
    this.dash.leftMenuToggler = !this.dash.leftMenuToggler;     
  }
  
  // showChildMenu(i){
  //   this.selectedIndex=i;
          //[class.showHead1]="selectedIndex === i && !flag1" (click)="showChildMenu(i)"
  // }
  showChild(i, k){
    
    switch(i){
      case 0://MainMenu1Route
      if(k){
        this.childrouter.navigate([this.mainMenu1Route[k]]);
      }
      // switch(k){
      //   case 0:
      //   this.childrouter.navigate([this.mainMenu1Route[k]]);
      //   break;
      //   case 1:
      //   this.childrouter.navigate([this.mainMenu1Route[k]]);
      //   break; 
      //   case 2:
      //   this.childrouter.navigate([this.mainMenu1Route[k]]);
      //   break;     
      // }
      break;
      case 1://MainMenu1Route
      // switch(k){
      //   case 0:
        
      //   break;
      //   case 1:
        
      //   break;      
      // }
      break;
      
    }
  }

  toggleCarret(i){
    this.t[i]=!this.t[i];
    for (var k=0; k<this.MainMenus.length; k++) {
      if(k===i)
      continue;
      this.t[k]=false;
    }
  }

// 10-01-19
// onClick() {
//   const li = this.renderer.createElement('li');
//   const text = this.renderer.createText('Click here to add li');
//   this.renderer.appendChild(li, text);
//   this.renderer.appendChild(this.abcd.nativeElement, li);
// }

}
