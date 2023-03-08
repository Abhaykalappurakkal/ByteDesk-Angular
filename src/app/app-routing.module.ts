import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsComponent } from './assets/assets.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { ContentComponent } from './content/content.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewComponent } from './new/new.component';
import { StatusListComponent } from './status-list/status-list.component';
import { ViewRequestByStatusComponent } from './view-request-by-status/view-request-by-status.component';

const routes: Routes = [
  {path:'home' , component:HomeComponent,canActivate:[AuthGuardGuard],
  children:[
    {path:'', component:ContentComponent},
    {path:'asset', component:AssetsComponent},
    {path:'new', component:NewComponent}, 
    {path:'status', component:StatusListComponent},
    {path:'dept', component:DepartmentListComponent},
    {path:'view', component:ViewRequestByStatusComponent}
  ]
},
  {path:'' , component:LoginComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
