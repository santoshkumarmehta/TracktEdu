import { Component, OnInit } from '@angular/core';
import { TopMenuService } from '../top-menu.service';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  schoolname= new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z  ]*')]);
  phoneno= new FormControl('', [Validators.required,Validators.pattern('[0-9]*')]);
  email = new FormControl('',[Validators.required,Validators.email,Validators.pattern('[a-zA-Z0-9  . @]*')]);
  firstname= new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z]*')]);
  lastname= new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z]*')]);
  pincode= new FormControl('', [Validators.required,Validators.pattern('[0-9]*')]);
  address=new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9  #  -]*')]);
  constructor() { }

  ngOnInit() {
  }

}
