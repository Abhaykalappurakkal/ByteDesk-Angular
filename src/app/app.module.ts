import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {MatStepperModule} from '@angular/material/stepper';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatIconModule} from '@angular/material/icon';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { NewComponent } from './new/new.component';
import { StatusListComponent } from './status-list/status-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { ViewRequestByStatusComponent } from './view-request-by-status/view-request-by-status.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AssetsComponent } from './assets/assets.component';
import { AuthIntercepterService } from './service/auth-intercepter.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ContentComponent,
    HeaderComponent,
    NavComponent,
    NewComponent,
    StatusListComponent,
    DepartmentListComponent,
    ViewRequestByStatusComponent,
    AssetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthIntercepterService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
