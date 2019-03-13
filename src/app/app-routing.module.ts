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
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { Sidenav1Component } from './sidenav1/sidenav1.component';
import { CourseComponent } from './course/course.component';
import { BatchComponent } from './batch/batch.component';
import { StudentComponent } from './student/student.component';
import { SubjectComponent } from './subject/subject.component';
import { ChapterComponent } from './chapter/chapter.component';
import { FormComponent } from './dashboard/form/form.component';



const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch:'full'},
  { path: 'login', component:LoginComponent},
  {path:'appcomponent', component:AppComponent},
  { path: 'dashboard', component:DashboardComponent,
  children:[
    { path:'form', component:FormComponent}
  ]
},
  { path:'register', component:RegisterComponent},
  {path:'forgotpassword', component:ForgotpasswordComponent},
  { path:"dashbordhreader", component:DashboardHeaderComponent},
  {path:'sidenav', component:Sidenav1Component},
  {path:'course', component:CourseComponent},
  { path:'batch', component:BatchComponent},
  { path:'student', component:StudentComponent },
  { path:'subject', component:SubjectComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes),
    // RouterModule.forChild(childroutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
