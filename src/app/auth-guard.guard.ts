import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router : Router){}
  canActivate()
  {
   if(sessionStorage.getItem("login")=="true"){
    return true;
   }
   else{
    this.router.navigateByUrl("");
    return false;
   }
  }
  
}
