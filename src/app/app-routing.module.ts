import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Table1Component } from './dashboard/dashchild/table1/table1.component';
import { Form1Component } from './dashboard/dashchild/form1/form1.component';
import { Form2Component } from './dashboard/dashchild/form2/form2.component';
import { TestComponent } from './test/test.component';
import { AddnewComponent } from './dashboard/dashchild/addnew/addnew.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch:'full'},
  { path: 'login', component:LoginComponent},
  { path: 'dashboard', component:DashboardComponent},
  
];
const childroutes: Routes = [
  {path:"", redirectTo:'/app', pathMatch:'full'},
  {path:'app', component:AppComponent},
  {path: 'dashboard',component: DashboardComponent, children: [                         
      {
          path:'table1',
          component: Table1Component
      },
      {
        path:'form1',
        component: Form1Component
      },
      {
        path:'form2',
        component: Form2Component
      },
      { 
        path: 'test', 
       component:TestComponent
      },
      {
        path: 'addnew',
        component: AddnewComponent
      }
    ]
  },
  { path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'forgotpassword', component:ForgotpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forChild(childroutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
