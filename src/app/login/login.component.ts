import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { TopMenuService } from '../top-menu.service';
import { NgbModal, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  // images=[1,2,3,4,5].map(()=>`https://picsum.photos/900/500?random&t=${Math.random()}`)
  
  // form Validation
  loginForm : FormGroup;
  submitted=false;
  constructor(config:NgbCarouselConfig, private formBuilder:FormBuilder,private router:Router){
  }
  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return false;
    }
      this.router.navigate(['/dashboard']);
  }
  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      email:['',[ Validators.required,Validators.email]],
      password:['', [Validators.required,Validators.minLength(6),Validators.maxLength(12)]]
    })
  }


  validatePassword(password:AbstractControl):({[key:string]:boolean}|null){
    if(password.value!==undefined )
    return null;
  }

  validateUsername( username:AbstractControl):({ [key: string]: boolean } | null) {
   if(username.value !==undefined && username.value=="@" && username.value==".com" ){
     return {};
   }
    return null;

  }
// }
//  loginOne(){
//   // this.router.navigate(['/dashboard']);
  
//  }
}
