import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RequestModel } from '../model/request-model';
import { NewService } from '../service/new.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  request: RequestModel = new RequestModel();
  requestData!: RequestModel;
  summary!: string;
  desc!: string;
  dept!: string;
  salutation = sessionStorage.getItem('salutation');
  name = sessionStorage.getItem('username');
  userId = sessionStorage.getItem('userId');

  constructor(private newService: NewService, private router: Router) {}

  ngOnInit(): void {
    // console.log(this.userId);
  }
  //entering values to request model
  data(event: any) {
    // console.log(event.target.value);
    this.request.requestedDepartment = event.target.value;
  }
  submit() {
    this.request.userId = sessionStorage.getItem('userId') || '';
    this.request.requestId =
      'TID' + sessionStorage.getItem('userCode') + new Date().getTime();
    this.request.requestDate = new Date();
    this.request.ticketDescription = this.desc;
    this.request.ticketSummary = this.summary;
    this.request.ticketStatus = 'open';
    // console.log(this.request);

    this.newService.createNewRequest(this.request).subscribe((data) => {
      this.requestData = data;
      // console.log(this.requestData);

      this.router.navigateByUrl('/home');
    });
  }
}
