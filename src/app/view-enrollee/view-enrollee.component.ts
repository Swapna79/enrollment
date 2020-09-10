import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { IEnrollee } from '../enrollee.model';

@Component({
  selector: 'app-view-enrollee',
  templateUrl: './view-enrollee.component.html',
  styleUrls: ['./view-enrollee.component.css']
})
export class ViewEnrolleeComponent implements OnInit {

  apiStatus: number;
  enrolleeList: IEnrollee[];

  constructor(private appService: AppService) {
    this.apiStatus = 0;
  }

  ngOnInit() {
    this.apiStatus = 1; // loading
    this.appService.getEnrollees().subscribe((res) => {
      this.enrolleeList = res['Enrollees'];
      this.apiStatus = 2; // success
    }, (err) => {
      this.apiStatus = 3; // error
    });
  }

}
