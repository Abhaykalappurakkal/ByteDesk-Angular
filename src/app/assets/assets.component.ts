import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css'],
})
export class AssetsComponent implements OnInit {
  //the array stores the value of different posibilities of asset status
  requests: string[] = ['Open', 'Cancelled', 'Assigned', 'Returned'];
  constructor() {
    //empty
  }

  ngOnInit(): void {
    //empty
  }
}
