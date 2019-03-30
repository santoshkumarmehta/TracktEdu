import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
    email = new FormControl('',[Validators.required,Validators.email]);
    phoneno= new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]);
// for Email Validator

//  emailDomainValidator(control: FormControl) { 
   
//   let email = control.value; 
//   if (email && email.indexOf("@") != -1) { 
//     let [_, domain] = email.split("@"); 
//     if(domain !== "gmail.com")  { 
//       return {
//         emailDomain: {
//           parsedDomain: domain
//         }
//       }
//     }
//   }
//   return null; 
// }
    getMessage(){
      return this.email.hasError('requird')?'You Must Enter a value':this.email.hasError('email')?'not a valid email id':'';
    }
  getPhoneNo(){
     return this.phoneno.hasError('requird')?'You Must enter a number':this.phoneno.hasError('phoneno')?'not a valid phone no':'';
   }

  constructor() { }

  ngOnInit() {
  }

}
