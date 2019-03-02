import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopMenuService {
   headerMenu = [
      //    'admin',
//   'user',
//   'supplier login',
//   'customer login',
//   'employee login'
];
  loginPhotoUrl = [
//      'url(/assets/loginPageImage/images.jpeg)no-repeat',
//     'url(/assets/loginPageImage/images.jpeg)no-repeat',
//     'url(/assets/loginPageImage/supplier.jpg)no-repeat',
//     'url(/assets/loginPageImage/customer.jpg)no-repeat',
//     'url(/assets/loginPageImage/emplyee.jpg)no-repeat'
 ];
 loginMenuId = [
      //  'admin',
      //  'subadmin',
      //  'supplier',
      //  'customer',
      //  'emp'
 ];
  
  selectedMenuId:number;
  tempId:string;
  loginHeader:string;
  photoPath: string;
  nav1:boolean;
  bgNav:boolean;
  menuId:string;
  selectedIndex:number;
  constructor() { }


  getLoginImage(id){
    switch(id){
      case 0:
            this.photoPath = this.loginPhotoUrl[0];
            break;
      case 1:
            this.photoPath = this.loginPhotoUrl[1];
            break;      
      case 2:
           this.photoPath = this.loginPhotoUrl[2];
           break;
      case 3:
            this.photoPath = this.loginPhotoUrl[3];
            break;
      case 4:
            this.photoPath = this.loginPhotoUrl[4];
            break;
    }
    return this.photoPath;
  }
  getLoginHeader(id){
    switch(id){
      case 0:
            this.loginHeader = this.headerMenu[0];
            break;
      case 1:
            this.loginHeader = this.headerMenu[1];
            break;      
      case 2:
            this.loginHeader = this.headerMenu[2];
            break;
      case 3:
            this.loginHeader = this.headerMenu[3];
            break;
      case 4:
            this.loginHeader = this.headerMenu[4];
            break;
    }
    return this.loginHeader;
  }
}
