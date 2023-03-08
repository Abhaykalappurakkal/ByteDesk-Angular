import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(private router: Router, private service: LoginService) {}

  ngOnInit(): void {
    //this is empty
  }
  //logout the session by clearing session storage and
  //navigating to login component
  logout() {
    sessionStorage.clear();
      sessionStorage.setItem('login', 'false');
      this.router.navigate(['']);
  }
}
