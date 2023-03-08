import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: User = new User();
  userData!: User;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  loginForm = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  //login function
  login() {
    this.user.userName = this.loginForm.value.userName || '';
    this.user.password = this.loginForm.value.password || '';
    if (this.loginForm.valid) {
      //subscribing the service method if loginform is valid
      this.loginService.loginUser(this.user).subscribe((data) => {
        this.userData = data;
        // saving the neccesary items in the session storage
        sessionStorage.setItem('token', this.userData.token)
        sessionStorage.setItem('username', this.userData.userName);
        sessionStorage.setItem('salutation', this.userData.salutation);
        sessionStorage.setItem('userId', this.userData.userId);
        sessionStorage.setItem('userCode',this.userData.userCode);
        sessionStorage.setItem('login', 'true');
        //navigate from login component to home component
        this.router.navigateByUrl('/home');
      });
    }
  }
}
