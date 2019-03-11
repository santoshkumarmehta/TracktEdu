import { Component, OnInit,Renderer, ElementRef } from '@angular/core';
import { TopMenuService } from '../top-menu.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
aa;
  // url:string="http://localhost:3000/posts";
//  photo = 'url(/assets/loginPageImage/admin.jpg)no-repeat';
// ManageDashlets1=['A1','A2','A3','A4'];
// ManageDashlets2=['B1','B2','B3','B4'];

constructor(private http:HttpClient) { }

// showMe(){
// this.http.get(this.url)
//       .subscribe(res=>{
//         this.aa = res;

//       });
// }
 

  ngOnInit() {
   
    
  }
  

}
