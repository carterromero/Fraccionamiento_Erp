import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { JournalslinService } from "../../../../services/gl/journalslin.service";
import { Journalslin } from "../../../../services/gl/journalslin";

@Component({
  selector: 'app-journalslin-details',
  templateUrl: './journalslin-details.component.html',
  styleUrls: ['./journalslin-details.component.scss']
})
export class JournalslinDetailsComponent implements OnInit {


  p_id: number;
  employee: Journalslin;  
  alertDisable = true;
  alertMessage = "null";

  constructor(private route: ActivatedRoute ,private router: Router,
    private employeeService: JournalslinService) { }

  ngOnInit() {
    this.employee = new Journalslin();    
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

