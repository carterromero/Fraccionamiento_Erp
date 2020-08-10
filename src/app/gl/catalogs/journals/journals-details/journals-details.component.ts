import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { JournalsService } from "../../../../services/gl/journals.service";
import { Journals } from "../../../../services/gl/journals";


@Component({
  selector: 'app-journals-details',
  templateUrl: './journals-details.component.html',
  styleUrls: ['./journals-details.component.scss']
})
export class JournalsDetailsComponent implements OnInit {


  p_id: number;
  employee: Journals;  
  alertDisable = true;
  alertMessage = "null";

  constructor(private route: ActivatedRoute ,private router: Router,
    private employeeService: JournalsService) { }

  ngOnInit() {
    this.employee = new Journals();    
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
