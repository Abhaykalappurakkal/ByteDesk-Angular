import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestModel } from '../model/request-model';
import { ContentService } from '../service/content.service';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css'],
})
export class StatusListComponent implements OnInit {
  request!: RequestModel[];
  open = false;
  cancelled = false;
  reassigned = false;
  resolved = false;
  closed = false;
  changingRequest!: RequestModel;
  count!: number;
  currentPage!: number;

  constructor(private contentService: ContentService, private router: Router) {}

  ngOnInit(): void {
    //calling the function with initial page number as 0
    this.getRequestData(0);
  }
  onTableRequestDataChange(event: number) {
    this.getRequestData(event - 1);
    this.currentPage = event;
  }

  getRequestData(page: number) {
    this.contentService
      .getListByStatus(page, this.contentService.toSent)
      .subscribe((res) => {
        this.request = res.userRequests;
        this.count = res.totalItems;
      });
    if (this.contentService.toSent == 'open') {
      this.open = true;
    } else if (this.contentService.toSent == 'cancelled') {
      this.cancelled = true;
    } else if (this.contentService.toSent == 'reassigned') {
      this.reassigned = true;
    } else if (this.contentService.toSent == 'resolved') {
      this.resolved = true;
    } else if (this.contentService.toSent == 'closed') {
      this.closed = true;
    }
  }

  view(path: string, request: RequestModel) {
    this.contentService.getRequest(request);
    this.contentService.getPath(path);
    this.router.navigateByUrl('/home/view');
  }

  openToCancel(requestId: string, request: RequestModel) {
    this.contentService.cancelRequest(requestId, request).subscribe((res) => {
      this.changingRequest = res;
      this.router.navigateByUrl('/home');
    });
  }
  resolvedToClosed(requestId: string, request: RequestModel) {
    this.contentService.closeRequest(requestId, request).subscribe((res) => {
      this.changingRequest = res;
      this.router.navigateByUrl('/home');
    });
  }
}
