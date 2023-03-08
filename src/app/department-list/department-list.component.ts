import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestModel } from '../model/request-model';
import { ContentService } from '../service/content.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
})
export class DepartmentListComponent implements OnInit {
  request!: RequestModel[];
  count!: number;
  currentPage!: number;

  constructor(private contentService: ContentService, private router: Router) {}

  ngOnInit(): void {
    //loads the table of data at initial page(page 0)
    this.getRequestData(0);
  }

  //gets the table of data according to page number 'page'
  getRequestData(page: number) {
    this.contentService
      .getListByDept(page, this.contentService.toSent)
      .subscribe((res) => {
        this.request = res.userRequests;
        this.count = res.totalItems;
      });
  }
  //change the page which is been shown according to the event(next/previous)
  onTableRequestDataChange(event: number) {
    this.getRequestData(event - 1);
    this.currentPage = event;
  }

  // navigates to view component to show the complete
  // details of a specific request that has been chosen
  view(path: string, request: RequestModel) {
    this.contentService.getRequest(request);
    this.contentService.getPath(path);
    this.router.navigateByUrl('/home/view');
  }
}
