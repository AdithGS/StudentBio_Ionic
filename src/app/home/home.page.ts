import { Component } from '@angular/core';
import { DataServiceService, Student } from '../common/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  studentsList:Student[]=[]
  constructor(private common:DataServiceService) { }

  ngOnInit() {
   this.studentsList= this.common.getStudent();
  }
}
