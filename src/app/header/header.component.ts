import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  address!: string;
  currentTime!: Date;
  date!: unknown;
  username = sessionStorage.getItem('username');
  salutation = sessionStorage.getItem('salutation');
  constructor() {
    //this is empty
  }

  ngOnInit(): void {
    //to show current time
    this.getDate();
    this.date = setInterval(() => {
      this.getDate();
    }, 1000);
  }

  //to salutate according to time
  getDate() {
    this.currentTime = new Date();
    const hrs: number = this.currentTime.getHours();
    if (hrs < 12) {
      this.address = 'Good Morning';
    } else if (hrs < 18) {
      this.address = 'Good Afternoon';
    } else {
      this.address = 'Good Evening';
    }
  }
}
