import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TopMenuService } from './top-menu.service';
import { Carousel1Component } from './carousel1/carousel1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Sidenav1Component } from './sidenav1/sidenav1.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashService } from './dash.service';
import { Table1Component } from './dashboard/dashchild/table1/table1.component';
import { Form1Component } from './dashboard/dashchild/form1/form1.component';
import { Form2Component } from './dashboard/dashchild/form2/form2.component';
import { RightsidenavComponent } from './rightsidenav/rightsidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DashNavComponent } from './dash-nav/dash-nav.component';
import { TabledataService } from './dashboard/dashchild/table1/tabledata.service';
import { TestComponent } from './test/test.component';
import { Test1serviceService } from './test/test1service.service';
import { AddnewComponent } from './dashboard/dashchild/addnew/addnew.component';
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
import { FormComponent } from './dashboard/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    Carousel1Component,
    DashboardComponent,
    Sidenav1Component,
    DashboardHeaderComponent,
    Table1Component,
    Form2Component,
    Form1Component,
    RightsidenavComponent,
    DashNavComponent,
    TestComponent,
    AddnewComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    MenusComponent,
    CourseComponent,
    SubjectComponent,
    BatchComponent,
    StudentComponent,
    ChapterComponent,
    FormComponent
   
  ],
  imports: [
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
  providers: [TopMenuService, DashService,TabledataService,Test1serviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
