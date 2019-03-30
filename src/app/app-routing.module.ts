import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
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
import { AddsubjectComponent } from './subject/addsubject/addsubject.component';
import { AddbatchComponent } from './batch/addbatch/addbatch.component';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { AddchapterComponent } from './chapter/addchapter/addchapter.component';
import { AddcourseComponent } from './course/addcourse/addcourse.component';

const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch:'full'},
  { path: 'login', component:LoginComponent},
  {path:'appcomponent', component:AppComponent},
  { path: 'dashboard', component:DashboardComponent},
  { path:'register', component:RegisterComponent},
  {path:'forgotpassword', component:ForgotpasswordComponent},
  { path:"dashbordhreader", component:DashboardHeaderComponent},
  {path:'sidenav', component:Sidenav1Component},
  {path:'course', component:CourseComponent},
  { path:'batch', component:BatchComponent},
  { path:'student', component:StudentComponent },
  { path:'addsubject', component:AddsubjectComponent},
  { path:'subject', component:SubjectComponent},
  {path:'chapter', component:ChapterComponent},
  { path:'addbatch', component:AddbatchComponent},
  {path:'addstudent', component:AddstudentComponent},
  { path:'addchapter', component:AddchapterComponent},
  {path:'addcourse', component:AddcourseComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
