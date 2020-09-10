import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { IEnrollee } from '../enrollee.model';

@Component({
  selector: 'app-add-enrollee',
  templateUrl: './add-enrollee.component.html',
  styleUrls: ['./add-enrollee.component.css']
})
export class AddEnrolleeComponent implements OnInit {

  addEnrollee = {} as IEnrollee;
  constructor(private appService: AppService) {
   }

  ngOnInit() {
  }

  onSubmit() {
    console.log('hem', this.addEnrollee);
    if (true) { // Form Valid
      this.appService.postEnrollee(this.addEnrollee);
    }
  }
}
