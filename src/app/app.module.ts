import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { Carousel1Component } from './carousel1/carousel1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Sidenav1Component } from './sidenav1/sidenav1.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { RightsidenavComponent } from './rightsidenav/rightsidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule,MatInputModule,MatFormFieldModule,MatTabsModule} from '@angular/material';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { MenusComponent } from './menus/menus.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { BatchComponent } from './batch/batch.component';
import { StudentComponent } from './student/student.component';
import { ChapterComponent } from './chapter/chapter.component';
import { AddchapterComponent } from './chapter/addchapter/addchapter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    Carousel1Component,
    DashboardComponent,
    Sidenav1Component,
    DashboardHeaderComponent,
    RightsidenavComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    MenusComponent,
    CourseComponent,
    SubjectComponent,
    BatchComponent,
    StudentComponent,
    ChapterComponent,
    AddchapterComponent,
 
    ],
  imports: [
    FormsModule,
    BrowserModule,
    NgbModule,ReactiveFormsModule,
    AppRoutingModule,MatInputModule,MatTabsModule,
    FormsModule,MatButtonModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,MatFormFieldModule,
    FlexLayoutModule

  ],
  entryComponents:[MenusComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
