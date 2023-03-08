import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestModel } from '../model/request-model';
import { ContentService } from '../service/content.service';

@Component({
  selector: 'app-view-request-by-status',
  templateUrl: './view-request-by-status.component.html',
  styleUrls: ['./view-request-by-status.component.css'],
})
export class ViewRequestByStatusComponent implements OnInit {
  ticketDetails!: RequestModel;
  path!: string;
  constructor(private router: Router, private contentService: ContentService) {}

  ngOnInit(): void {
    this.ticketDetails = this.contentService.request;
    this.path = this.contentService.path;
    // console.log(this.ticketDetails.ticketDescription);
  }
  route() {
    this.router.navigateByUrl(`/home/${this.path}`);
  }
}
