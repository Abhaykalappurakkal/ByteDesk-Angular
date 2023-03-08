import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestModel } from '../model/request-model';
import { ContentService } from '../service/content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  response!: RequestModel;

  //this stores the departments and their respective image tag
  departments: Array<string[]> = [
    ['IT', '..//src/assets/asset.png'],
    ['Finance', '..//src/assets/financedept.png'],
    ['HR', '..//src/assets/hrdept.png'],
    ['Learning', '..//src/assets/learningdept.png'],
  ];

  constructor(private contentService: ContentService, private router: Router) {}

  ngOnInit(): void {
    //this is empty
  }
  // navigates to the component which shows the table according to the status 'status'
  requestStatus(status: string) {
    this.contentService.getToSent(status);
    // console.log(status);
    this.router.navigateByUrl('/home/status');
  }
  // navigates to the component which shows the table according to the department 'dept'
  requestDepartment(dept: string) {
    this.contentService.getToSent(dept);
    this.router.navigateByUrl('/home/dept');
  }
}
