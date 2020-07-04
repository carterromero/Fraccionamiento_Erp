import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { LinesService } from "../../../../services/gl/lines.service";
import { Lines } from "../../../../services/gl/lines";


@Component({
  selector: 'app-lines-details',
  templateUrl: './lines-details.component.html',
  styleUrls: ['./lines-details.component.scss']
})
export class LinesDetailsComponent implements OnInit {


  p_id: number;
  employee: Lines;  
  alertDisable = true;
  alertMessage = "null";

  constructor(private route: ActivatedRoute ,private router: Router,
    private employeeService: LinesService) { }

  ngOnInit() {
    this.employee = new Lines();    
    this.p_id = this.route.firstChild.snapshot.params['p_id']
    console.log(this.p_id);
    
    
    this.employeeService.getEmployee(this.p_id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      });
  }
}